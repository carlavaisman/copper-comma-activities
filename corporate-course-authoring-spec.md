# From Complaint to Resolution
## Corporate portfolio course — authoring specification

**Status:** Course design and authoring plan. Native Rise 360 and Storyline 360 builds have not been produced or verified. This document is not a completed case study or evidence of native authoring proficiency.

**Positioning:** A conventional corporate customer-service course for new frontline support employees. A fictional subscription business provides the setting; the policy below exists only for this training sample. This replaces the sustainability lab as the proposed third flagship case study.

**Portfolio role:** Show a cohesive, professional onboarding course in Articulate Rise 360, with a substantial branching interaction built in Articulate Storyline 360. Keep Office Hours as evidence of custom interactive development and Academic Writing as evidence of curriculum and assessment design. Use the skills page to connect each tool to the artifact that actually demonstrates it.

## Learning brief

**Performance problem:** New employees can repeat a service policy but struggle to apply it during a tense conversation. They may offer a remedy before checking the facts, make promises outside their authority, or pass a complaint along without a usable case note.

**Audience:** New customer-support employees with basic product knowledge. The course assumes they can navigate the support system; a separate short systems simulation supplies practice where needed.

**Scope:** A 15–20 minute course with a short prerequisite-free introduction, a worked example, one practice scenario, a consequential branching challenge, a job aid, and a brief assessment. Duration is a design target, to be checked after authoring.

**Performance objectives:** Given a complaint and a fictional policy reference, the learner will:

1. Identify the customer’s concern and the facts still needing verification.
2. Choose a response that acknowledges the impact and asks a useful question.
3. Select a remedy within the employee’s authority, or escalate with a complete handoff.
4. Write a concise case note that records evidence, action, and next steps.

**Success criteria:** In the final scenario, make all three critical policy decisions correctly and meet all four case-note criteria. Feedback and targeted retries support practice. Course completion alone is not evidence of workplace performance.

**Evaluation plan:** Record scenario decisions, retries, and case-note self-review during a pilot. If implemented for an employer, agree with stakeholders on a baseline and a feasible follow-up measure, such as completeness of real case notes. Do not claim improved satisfaction, reduced handling time, or other outcomes until measured.

## Fictional policy reference

The training company, Northline, sells monthly software subscriptions. All names and records are fictional.

- Verify the order and billing record using the approved authenticated support process before discussing account-specific details. Never ask for a password or full payment-card number.
- Agents may reverse a verified duplicate monthly charge once they confirm that both payments settled. A pending authorization is not a second settled charge.
- Requests for additional compensation and exceptions to the written policy go to a supervisor. Agents may prepare the handoff; they may not promise approval.
- When a transaction status is unclear, tell the customer what will be checked and set a specific update time. Do not promise a refund before confirming eligibility.
- Every case note includes the verified issue, evidence consulted, action or escalation, and owner plus next-update time.

This simplified policy is the authoritative reference within the sample. It is not advice about a real company’s policies or payment processes.

## Rise 360 course structure

| Lesson | Learner experience | Evidence to retain |
|---|---|---|
| 1. Start with the concern | Brief welcome, workplace problem, objectives, and one introductory decision | Rise lesson structure and published view |
| 2. Check before you promise | Annotated worked example with a short policy reference and two knowledge checks | Feedback writing and responsive course presentation |
| 3. Practice the conversation | Embedded native Storyline interaction, followed by a completion gate configured and tested in the actual course | Rise editor, Storyline block, and tested published course |
| 4. Close the loop | Case-note example, downloadable one-page job aid, and a short self-review | Job-aid source and learner download |
| 5. Check your judgment | Four new policy-application questions with diagnostic feedback | Question/feedback design and published results behavior |

The published portfolio should provide both a full-course link and a direct link to the Storyline sample. This makes the authoring work easy to find without requiring visitors to finish the entire course.

## Storyline interaction

**Working title:** Resolve the Complaint.

**Design:** A branching conversation with three short cases. These are practice stages rather than a points-only quiz. Decisions alter the customer’s reply, the case information available, and the next step. A visible case file stores verified facts and the learner’s selected actions. It is a course feature to build in Storyline, not a claim about the existing HTML Memory Bank.

### Case 1 — The duplicate charge

Customer: “You charged me twice. I’ve already spent my lunch break trying to fix this.”

**Decision 1: Opening response**

- A. “That sounds frustrating. Let’s look at the billing record together.” Best choice. Feedback: acknowledge the impact and move toward evidence.
- B. “Our system does not usually make that mistake.” Defensive branch. Customer questions whether the employee is listening; retry follows focused feedback.
- C. “I’ll refund it immediately.” Premature promise branch. Feedback explains that the account and charge status must be verified first.

**Decision 2: Evidence**

The case file offers an authenticated order record, a masked transaction list, and a customer message. The order record has one purchase; both same-amount payments are settled. Learners identify the two settled payments as evidence of a duplicate. An optional policy tab stays available.

**Decision 3: Remedy**

Choose reversal of the verified duplicate and give a clear follow-up commitment. Distractors: promise an unapproved extra credit; escalate every duplicate without first applying the agent-authority rule. Feedback names the policy and consequence.

### Case 2 — The apparent duplicate

Transfer case with less guidance. The customer sees two entries, but one is settled and one is a pending authorization. The learner should explain the distinction using the provided record, avoid claiming a duplicate refund is already approved, and set the stated update time if uncertainty remains. Do not invent a universal bank-processing timeline.

### Case 3 — The exception request

A returning customer wants compensation beyond reversal of a verified duplicate. Learner choices: promise the extra credit, refuse without explanation, or resolve the authorized portion and prepare a supervisor handoff for the exception. The best path avoids an unauthorized promise and supplies a complete handoff.

**Final case note:** Learner enters a short note using fictional details. A model note appears after submission. The four-item self-review checks verified issue, evidence, action, and next owner/update. It is explicitly self-reviewed; do not present text entry as automatically scored for meaning.

### Proposed scene / slide map

| ID | Slide or layer purpose | Required behavior |
|---|---|---|
| S00 | Welcome and controls | Explain keyboard access; start or restart practice |
| S01 | Policy reference | Available throughout; close returns focus sensibly |
| S10 | Case 1 opening | Three response choices; selection-specific feedback |
| S11 | Billing evidence | Inspect records and collect verified facts |
| S12 | Remedy choice | Check policy condition; remediate unsafe promise |
| S13 | Case 1 debrief | Summarize selected actions and why they matter |
| S20 | Case 2 transfer | New transaction status; less guided decision |
| S21 | Case 2 debrief | Diagnose evidence-versus-assumption error |
| S30 | Case 3 transfer | Resolve authorized portion and escalate exception |
| S31 | Case note | Text entry, model, and four self-review checks |
| S40 | Summary | Decision recap, case-file download if implemented, retry |

### Proposed variables and logic

Implement and verify the following in the actual Storyline project. Names are proposed rather than evidence of completed programming.

| Variable | Type | Purpose |
|---|---|---|
| Case1Opening | Number | Selected response code |
| DuplicateVerified | True/False | Confirmed two settled charges |
| Case1Resolved | True/False | Authorized remedy selected |
| Case2Resolved | True/False | Pending authorization correctly interpreted |
| Case3Resolved | True/False | Exception routed without unauthorized promise |
| CriticalError | True/False | Unsafe or unsupported commitment in final attempt |
| CaseNote | Text | Learner’s fictional case note |
| NoteIssue / NoteEvidence / NoteAction / NoteOwner | True/False each | Learner self-review checks |
| AttemptCount | Number | Count final challenge attempts |
| PracticeComplete | True/False | All scenario and reflection requirements satisfied |

**Trigger intent:** Set decision variables when a choice is submitted; display choice-specific feedback; change the relevant case-file state; allow a focused retry. Set PracticeComplete only after required decisions and reflection are complete. Configure and test the course-completion signal in the native tools. Do not assume a variable alone notifies Rise.

**Critical scoring:** An unsafe remedy cannot be compensated for with extra clicks or optional points. If a final critical decision is incorrect, show targeted feedback and require a fresh attempt at that decision. An unscored practice route may allow exploration, but label it clearly.

## Media and companion assets

Create assets where they serve the learning. Keep editable files and capture authorship evidence as work is completed.

- Illustrator: simple original billing-record icons, case-file visuals, and the Copper Comma wordmark source already available separately.
- Photoshop: prepare scenario imagery or composite a fictional support workspace; retain layered source. Do not add unnecessary portraits merely to use Photoshop.
- Camtasia: a captioned 45–60 second walkthrough of the fictional support workflow, with transcript.
- Captivate: a separate short software-practice sample in which the visitor logs the resolution in a mock support system. This complements the course rather than duplicating the conversation.
- Premiere Pro / After Effects: a brief edited introduction or process animation with captions and transcript. Capture actual project files; using a finished video is not proof of either tool by itself.
- Canva: an editable one-page “Acknowledge · Verify · Resolve · Record” job aid. Give it a clear purpose and accessible PDF export.

The media items above are an asset plan, not completed deliverables.

## Assessment and accessibility checks

- Each scored decision matches an objective and cites the fictional policy.
- Distractors reflect a plausible workplace error; feedback explains the error and a better action.
- The conversation can be completed without drag-only, hover-only, or timed responses.
- Check focus order, visible focus, keyboard operation, meaningful labels, screen-reader reading order, contrast, captions, and text scaling in the native published outputs.
- Make documents available as accessible text where feasible. Provide a transcript or equivalent text route for audiovisual explanations.
- Test correct/incorrect paths, retries, restart behavior, completion messaging, embeds, mobile presentation, and any LMS package in the intended destination.
- Do not claim WCAG conformance or LMS tracking until the corresponding checks are performed.

## Portfolio presentation after the native build

**Case-study title:** From Complaint to Resolution.

**Short description:** A customer-service onboarding course that turns policy knowledge into practical judgment through a branching conversation, realistic records, and a concise case-note task.

**Role statement:** Use “Concept, instructional design, writing, development, and visual design” only for work Carla personally carries out or explicitly reviews and owns. Credit collaborators and external assets. Identify the course as a self-initiated portfolio project with a fictional client.

**Tools:** Display Rise 360 and Storyline 360 as the lead tools only after the published native samples are available. List supporting tools actually used, with links to their corresponding evidence.

**Case-study sections:** The performance problem; audience and constraints; learning objectives; design decisions; course preview; Storyline interaction; assessment and feedback; assets and authoring evidence; testing and lessons learned.

**Results:** Describe what was built and what testing established. Do not invent client approval, learner results, satisfaction changes, or completion data.

## Release gates and remaining dependencies

1. Confirm access to Articulate 360, a suitable Windows environment for Storyline, and any reusable native projects.
2. Author in Rise and Storyline, retaining the editable source and evidence of states, layers, triggers, and variables.
3. Export or publish the actual native outputs; embed and test them on the selected host. Check hosting and license terms for the intended use.
4. Complete the authoring and accessibility checks above. Conduct a small usability pilot if feasible.
5. Replace the private preview’s “In development” label with the actual project status, publish the case study, and connect its verified tools on the skills page.

The existing custom HTML activities do not meet gates 2–4 for Articulate. A storyboard, screenshot mockup, or code-based lookalike cannot substitute for a real Rise or Storyline build.
