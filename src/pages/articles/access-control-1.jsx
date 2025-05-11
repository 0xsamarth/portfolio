const AccessControl1 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Exploiting Asynchronous Job Queues to Elevate Privileges in redirect.com</h1>
      <p className="mb-4">Written by <strong>Samarth Aher</strong></p>

      <p className="text-lg mb-4">Hey, fellow bug hunters 👋</p>

      <p className="mb-4">
        Let’s get into a <strong>technical deep dive</strong> today where I’ll share a serious <strong>Broken Access Control (BAC)</strong> vulnerability I found in redirect.com. 
        It’s a vulnerability that hides under the <strong>asynchronous job queue</strong>, allowing <strong>normal users</strong> to perform <strong>admin-level actions</strong> — specifically, to <strong>ban users</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">🛠️ The Setup and Recon</h2>
      
      <h3 className="font-semibold mt-4">Step 1: Initial Recon — Role-based Access Control (RBAC)</h3>
      <p>
        I started by analyzing how the platform implemented <strong>RBAC</strong>. Typical tests like attempting to access <code>/admin/*</code> routes resulted in the <strong>403 Forbidden</strong> response. 
        So far, so good. Normal users were properly restricted from accessing admin functionalities via the UI.
      </p>
      
      <h3 className="font-semibold mt-4">Step 2: Investigating the Background Queue System</h3>
      <p>
        While testing the <strong>user reporting system</strong>, I came across an <strong>asynchronous job queue</strong> that handled user flags (e.g., reports for abuse, offensive content). 
        It was an interesting feature because when a normal user flagged another user, nothing would immediately happen to the flagged user’s account. The system queued the request for processing at a later time. 
        This behavior indicated that some <strong>actions were being handled behind the scenes</strong> by a background worker.
      </p>

      <pre className="bg-gray-100 p-4 rounded my-4">
{`POST /api/queue/push HTTP/1.1
Authorization: Bearer <UserToken>
Content-Type: application/json

{
  "action": "report_user",
  "target_id": "user_456",
  "reason": "offensive_content"
}`}
      </pre>
      
      <p className="mt-4">
        The endpoint <code>/api/queue/push</code> seemed to push a new action into the queue. The interesting part was the <strong><code>action</code></strong> field. 
        I began wondering if there were other actions available in the system — ones that could be manipulated.
      </p>
      
      <h2 className="text-xl font-semibold mt-6 mb-2">🔑 Discovery: Hidden `ban_user_request` Action</h2>
      <p className="mt-4">
        As I examined the admin interface more closely, I found that admins could also perform a <strong>ban operation</strong> via the same asynchronous queue. 
        However, the admin action was a <strong>hidden parameter</strong> in the <code>action</code> field. Instead of simply flagging a user, an admin could submit an action with the value <code>ban_user_request</code> 
        to immediately remove a user from the platform.
      </p>

      <p className="mt-4">
        Upon inspecting the background job system further, I realized that <strong>admin actions were just like normal user actions</strong> once placed in the queue. 
        The system did not differentiate between <strong>normal users and admins</strong> when pushing requests to the queue.
      </p>

      <h3 className="font-semibold mt-4">Action Discovery Flow:</h3>
      <ol className="list-decimal pl-6">
        <li><strong>Normal User Flagging:</strong> A normal user flags another user, triggering a report.</li>
        <li><strong>Admin Triggered Ban:</strong> The admin interface allows an action <code>"ban_user_request"</code> to be submitted into the queue.</li>
        <li><strong>Job Queue Processing:</strong> The background worker processes the job based on the queued data, regardless of the user role who initiated it.</li>
      </ol>

      <h2 className="text-xl font-semibold mt-6 mb-2">🚨 Exploit Execution</h2>
      <p className="mt-4">
        I crafted a request similar to the <strong>normal flagging request</strong>, but instead of <code>"report_user"</code>, I set the action to <code>"ban_user_request"</code>.
      </p>

      <pre className="bg-gray-100 p-4 rounded my-4">
{`POST /api/queue/push HTTP/1.1
Authorization: Bearer <NormalUserToken>
Content-Type: application/json

{
  "action": "ban_user_request",
  "target_id": "user_789",
  "note": "test-bypass"
}`}
      </pre>
      
      <p className="mt-4">
        I immediately noticed that this request returned a <strong>200 OK</strong> response. The server didn’t reject the request based on the user role, nor did it validate the action. 
        Instead, it blindly accepted the <code>"ban_user_request"</code> action and queued it for processing.
      </p>

      <h3 className="font-semibold mt-4">Step 3: Verifying the Ban — Silent Execution</h3>
      <p className="mt-4">
        The job didn’t execute instantly. It was processed by the <strong>background worker</strong> — a system designed to handle these operations asynchronously. 
        Several minutes later, I tried to log in as <code>user_789</code> and was <strong>met with a banned message</strong>. Their account was effectively <strong>banned</strong> without any admin intervention.
      </p>
      
      <h2 className="text-xl font-semibold mt-6 mb-2">🗓️ Timeline</h2>
      <p className="mt-4">
        <strong>Report Submitted</strong>: May 5, 2025<br/>
        <strong>Response from Program (`redirect.com`)</strong>: May 6, 2025<br/>
        <strong>Triaged & Confirmed</strong>: May 7, 2025<br/>
        <strong>Bounty Paid</strong>: May 10, 2025
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">🚀 Conclusion</h2>
      <p className="mt-4">
        This was a <strong>sophisticated privilege escalation</strong> issue in the form of <strong>Broken Access Control</strong> buried deep within an asynchronous job queue system. 
        The ability for a normal user to submit an admin action, like banning another user, was a subtle but significant flaw.
      </p>
      <p className="mt-4">
        What made this bug difficult to find was its <strong>invisibility</strong> in the UI — no obvious admin controls were exposed to normal users. By exploiting the unvalidated queue system, I was able to bypass RBAC and elevate my privileges to perform admin actions without the platform ever detecting it.
      </p>
      <p className="mt-4">
        Always remember to check <strong>behind the scenes</strong>. Asynchronous job queues can sometimes become the <strong>Achilles' heel</strong> of an otherwise secure platform.
      </p>

      <p className="font-semibold mt-4">Happy hunting! 🕵️‍♂️💻</p>
    </div>
  );
}

export default AccessControl1;
