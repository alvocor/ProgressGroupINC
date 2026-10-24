# Project Development Continuity Protocol

**Version:** 0.41
**Status:** Draft  
**Purpose:** Preserve project direction, development state, and reliable handoff between development sessions and agents.

---

## Revision History

| Version | Date | Change |
|---|---|---|
| 0.41 | 2026-07-19 | Added proportional post-baseline Change and Enhancement Intake linking source authority, baseline effects, impact review, Ready work, and closure. |
| 0.40 | 2026-07-19 | Added required owner-facing feedback participation choices and configured generation offers while keeping bundle creation and delivery optional. |
| 0.39 | 2026-07-16 | Added a proportional non-circular final-verification evidence rule from `OBS-MOD-ST-007`. |
| 0.38 | 2026-07-16 | Added a conditional tool-neutral required-read completion fallback from `OBS-MOD-ST-004`. |
| 0.37 | 2026-07-15 | Defined optional one-folder feedback delivery, transfer-operator limits, root inbox discovery/adjudication, and harness-owned independent review from `OBS-MOD-ST-002` and `OBS-MOD-ST-003`. |
| 0.36 | 2026-07-14 | Added the stakeholder-facing Project Overview standard, root overview, and reusable template. |
| 0.35 | 2026-07-13 | Defined bounded authorized-evidence-exception records from `OBS-IR-013`. |
| 0.34 | 2026-07-13 | Added conditional application-data backup/recovery evidence rules from `OBS-IR-012`. |
| 0.33 | 2026-07-13 | Added repository-scope and truthful isolation guidance from `OBS-IR-008`. |
| 0.32 | 2026-07-13 | Added proportional change-impact reconciliation from `OBS-IR-010`. |
| 0.31 | 2026-07-13 | Added proportional partial-validation reconciliation from `OBS-IR-004`. |
| 0.30 | 2026-07-13 | Added lightweight human-facing validation-request guidance from `OBS-IR-003`. |
| 0.29 | 2026-07-12 | Added proportional use of context, reasoning, tools, and model capability as a core principle. |
| 0.28 | 2026-07-12 | Added a temporary manual `feedback-export/` to root `feedback-inbox/` staging convention. |
| 0.27 | 2026-07-11 | Defined loosely coupled protocol deployment feedback bundles and root-project intake. |
| 0.26 | 2026-07-11 | Added the reusable Context Manifest template for scoped work. |
| 0.25 | 2026-07-11 | Defined safe, reproducible Scoped Context Loading for modular requirements. |
| 0.24 | 2026-07-11 | Defined the Modular Requirements Architecture Standard. |
| 0.23 | 2026-07-11 | Distinguished intake artifact modes from requirements architecture. |
| 0.22 | 2026-07-11 | Required individual traceability for materially distinct assumptions. |
| 0.21 | 2026-07-11 | Defined compact requirements-intake mode and expansion triggers. |
| 0.20 | 2026-07-11 | Added the expanded reusable requirements-intake template set. |
| 0.19 | 2026-07-11 | Defined normalized requirement strength separately from lifecycle status. |
| 0.18 | 2026-07-11 | Added version-control checkpoint and authorized remote-synchronization rules. |
| 0.17 | 2026-07-11 | Added authoritative validation-event and baseline-transition consistency rules. |
| 0.16 | 2026-07-11 | Added the Requirements Intake and Normalization layer. |
| 0.15 | 2026-07-11 | Defined milestone and release closure quality conditions. |
| 0.14 | 2026-07-11 | Added concurrent-session ownership and integration rules. |
| 0.13 | 2026-07-11 | Defined control-item types, quality, ownership, and lifecycle. |
| 0.12 | 2026-07-11 | Added the verification and evidence quality standard. |
| 0.11 | 2026-07-11 | Added requirements traceability and change-control rules. |
| 0.10 | 2026-07-11 | Added revision history and required version-change traceability. |
| 0.9 | 2026-07-11 | Defined when and how supporting artifacts may extend the main entry point. |
| 0.8 | 2026-07-11 | Added information-retention and archiving rules. |
| 0.7 | 2026-07-11 | Added the decision quality standard and decision lifecycle. |
| 0.6 | 2026-07-11 | Defined Ready and Complete work-item quality conditions. |
| 0.5 | 2026-07-11 | Distinguished mandatory rules, recommendations, and optional behavior. |
| 0.4 | 2026-07-11 | Added consistent protocol terminology. |
| 0.3 | 2026-07-11 | Improved the protocol and live-state naming. |
| 0.2 | 2026-07-10 | Added bounded, user-controlled technology selection. |
| 0.1 | 2026-07-10 | Established the initial continuity protocol and live project-state template. |

Record every protocol version change here with an absolute date and a concise description of the behavior or structure affected. Keep newest entries first. Project-specific state changes belong in the project's Development Log, not in this protocol revision history.

---

## 1. Role of This Document

This document is the main entry point for project development. It combines:

1. the rules that govern how the project is developed; and
2. the current, durable state of the development effort.

It exists so that a new agent can continue useful work without reconstructing the project from the entire codebase or relying on prior conversation history.

The requirements define **what the project must achieve**. The codebase contains **what has been implemented**. This document records **where development stands, why it stands there, and what should happen next**.

This document is the authoritative source for development-process state. It does not override the requirements or the code when describing product behavior or actual implementation. If these sources disagree, the discrepancy must be recorded under **Open Questions and Blockers** and resolved rather than silently guessed.

### 1.1 Terminology

The protocol uses these terms consistently:

| Term | Meaning in This Protocol |
|---|---|
| **Principle** | A durable reason or value that guides how the development process should behave. |
| **Rule** | Required process behavior that an agent or contributor must follow. |
| **Recommendation** | Preferred process behavior that normally improves the result but may be departed from for a documented reason. |
| **Standard** | A repeatable quality expectation used to judge how work or an artifact should be produced. |
| **Constraint** | A project-specific limit or condition that a solution must respect. |
| **Requirement** | An authoritative statement of a product capability, outcome, or quality that must be satisfied. |
| **Decision** | An intentional choice with recorded rationale, consequences, and status. |
| **Work item** | A bounded development outcome with acceptance criteria, verification, and status. |
| **State** | A concise description of what is currently true about the project and its development. |
| **Evidence** | A test result, inspection, artifact, or observation that supports a completion or quality claim. |
| **History** | A durable record of meaningful past work, decisions, discoveries, and changes. |
| **Handoff** | The information needed for another session or agent to continue safely from the current state. |

These categories should not be substituted for one another. For example, a selected database is normally a **decision**, a required deployment environment is a **constraint**, and protection against committing secrets is a **standard**.

### 1.2 Rule Language

When this protocol prescribes behavior, interpret its words as follows:

- **Must** and **must not** identify mandatory rules. Work that violates one is not protocol-conformant unless the rule itself defines an exception.
- **Should** and **should not** identify recommendations. A different approach is allowed when project context justifies it; record the reason when the departure materially affects continuity, risk, scope, or verification.
- **May** identifies permitted but optional behavior.
- Descriptive statements explain context or current state and do not create a requirement unless they use mandatory language.

Do not treat a recommendation as mandatory merely because it is the default, and do not weaken a mandatory rule into a recommendation for convenience.

---

## 2. Core Principles

1. **Continuity over memory**  
   Important project knowledge must be written here, not left only in a chat, an agent's memory, or an uncommitted assumption.

2. **Requirements drive the work**  
   Every significant unit of work must trace back to a project goal or requirement.

3. **Inspect before changing**  
   An agent must read this document, inspect the relevant implementation, and check the current repository state before making changes.

4. **Small, verifiable units of work**  
   Work should be divided into units that have a clear outcome and a practical way to verify completion.

5. **Evidence over assertion**  
   A task is complete only when its acceptance criteria have been met and the relevant verification evidence is recorded.

6. **Explicit decisions and uncertainty**  
   Decisions, assumptions, blockers, and unresolved questions must be recorded. An agent must not silently turn an assumption into project direction.

7. **Handoff is part of completion**  
   A unit of work is not complete until this document reflects the resulting project state and identifies the next actionable work.

8. **Keep the document useful**  
   Maintain concise current state. Preserve durable decisions and meaningful history, but do not use this document as a transcript or duplicate information already maintained reliably elsewhere.

9. **Use resources proportionally** — Use the lowest-cost combination of context, reasoning, tools, and model capability that can complete the work with sufficient confidence, verification, and continuity. Escalate only when risk or uncertainty requires it.

---

## 3. Sources of Truth

Use project information in this order:

1. **Approved requirements** — product goals, scope, and acceptance expectations.
2. **The working system and repository** — actual implemented behavior and artifacts.
3. **This document** — development status, plan, decisions, handoff, and known discrepancies.
4. **Supporting documentation** — architecture notes, API specifications, designs, and operational guides.
5. **Conversation history** — temporary context only; durable information must be transferred into an appropriate source above.

When sources conflict, do not choose whichever is convenient. Record the conflict, investigate it, and either resolve it within existing authority or request a decision.

### 3.1 Requirements Intake and Normalization Standard

User-provided requirements may arrive as a formal specification, draft PRD, prompt, conversation, ticket collection, existing system, or other incomplete and inconsistent source. Before implementation planning, the project must determine whether that input is sufficiently authoritative, structured, and testable to serve as a requirements baseline.

The intake layer produces three distinct forms of information:

1. **Source input** — the original user or stakeholder material, preserved with its provenance and status.
2. **Requirements Intake Brief** — the agent's structured analysis of explicit intent, gaps, ambiguity, conflicts, assumptions, and questions.
3. **Normalized Requirements Baseline** — requirements accepted by the appropriate authority and suitable for goals, planning, implementation, and verification.

These forms must not be treated as interchangeable. Normalization clarifies and structures source intent; it does not grant the agent authority to invent product direction.

#### Intake Workflow

When source input is not already an approved, implementation-ready baseline, the agent must:

1. **Register and preserve the source.** Record its location, type, author or authority when known, date received, and status. Preserve the original content or a durable reference to it.
2. **Extract explicit intent.** Identify stated outcomes, users, capabilities, scope, constraints, data, integrations, quality expectations, and delivery expectations without adding unstated commitments.
3. **Assess readiness.** Identify ambiguity, conflicts, missing acceptance criteria, undefined terms, infeasible expectations, and material gaps affecting scope, architecture, security, data, operations, cost, or verification.
4. **Separate derived information.** Classify agent-derived content as a proposed requirement, assumption, recommendation, question, risk, or decision candidate. Do not label it as approved user intent.
5. **Draft normalized requirements.** Use stable identifiers, clear statements, proposed acceptance criteria, source traceability, and an explicit status for each item.
6. **Prepare validation.** Present a concise understanding of the project, proposed scope boundaries, material assumptions, unresolved questions, and any alternatives requiring authority.
7. **Obtain disposition.** The user or other named authority may approve, revise, reject, or defer proposed items, or explicitly delegate a bounded decision.
8. **Establish the baseline.** Record the approved requirements artifact, version or date, authority, remaining open controls, and readiness for planning.

#### Intake Quality Rules

- Ask first about matters that could materially change product scope, architecture, security, data handling, cost, irreversible work, or release acceptance.
- Group related questions into a small review set. Do not require the user to answer low-impact details before useful planning can continue.
- A low-risk, reversible assumption may be carried provisionally when it is clearly labeled, its impact if wrong is recorded, and the next work does not make it costly to reverse.
- If the product itself is still being discovered, create a bounded discovery milestone rather than pretending implementation requirements are complete.
- Prototypes or investigations may begin before baseline approval only when explicitly authorized, clearly separated from production implementation, and designed to answer recorded questions.
- Do not manufacture precision. A measurable acceptance criterion must reflect an approved expectation or remain proposed until validated.

#### Human-Facing Validation Requests

When an authoritative response is needed, the agent must make the request understandable without requiring the user to decode identifiers or read every supporting artifact. The user-facing message must:

- state in plain language what needs a decision and why the response is needed;
- pair identifiers with meaningful labels and surface the material choices, assumptions, or consequences;
- provide a recommended response when one is justified while preserving the user's authority to choose differently; and
- give short, directly usable examples for **Approve**, **Revise**, and **Add**.

For example:

- `Approve [item or clearly defined group].`
- `Revise [ID or label]: [requested change]. Approve the rest.`
- `Add: [new requirement]. Approve the rest.`

**Reject**, **Defer**, and **Delegate** remain valid dispositions and should be introduced when relevant, but the agent need not list every possible disposition at every validation gate. A supporting artifact may provide full detail, but the user-facing request must contain enough context for an informed response or identify exactly what additional material must be reviewed.

#### Validation Events and Dispositions

Every response from an authorized user or stakeholder that approves, revises, rejects, defers, delegates, or adds requirements must be preserved as a dated validation source event. Assign it a stable source identifier and record its authority. Preserve the response itself or a durable faithful reference; do not rewrite earlier source input to make the later disposition appear original.

For each affected requirement, assumption, question, scope statement, or decision candidate, record one explicit disposition:

- **Approved** — accepted into the baseline as stated or with recorded normalization.
- **Revised** — changed by the authority; preserve both the prior proposal and authorized replacement.
- **Rejected** — intentionally excluded; retain the decision when it affects future interpretation.
- **Deferred** — not decided or not included now; record impact, revisit condition, and whether dependent work may proceed.
- **Added** — introduced during validation; give it source traceability and subject it to the same readiness analysis as original input.
- **Delegated** — a bounded decision was assigned to a named person, role, or agent; record the allowed scope and constraints.

Silence, lack of objection, or approval of one section must not be treated as approval of unrelated proposed content. When one response approves a defined group of items, identify that group unambiguously.

#### Partial-Validation Reconciliation

After applying an authoritative validation response, even when the response is partial and the baseline remains **Proposed**, the agent must, before completing the related work or handoff:

- confirm that the response is registered and each affected item has its current disposition;
- reconcile the affected current authority and status summaries with the validation event and baseline history;
- reconcile affected control items and live project state, including intake status, next actions, and authorization gates; and
- correct any resulting discrepancy or record it as an open control item.

Keep this reconciliation proportional to the response by inspecting the affected artifacts and summaries. It does not replace or require the complete **Baseline Transition Consistency Check**, which remains mandatory before changing a normalized baseline from **Proposed** to **Approved**.

#### Baseline Transition Consistency Check

Before changing a normalized baseline from **Proposed** to **Approved**, verify and record that:

- every authoritative validation response is registered as a source event;
- every material question and assumption has an individual or unambiguous grouped disposition;
- added and revised requirements have stable identifiers, source mappings, acceptance criteria, and readiness assessment;
- requirement, scope, constraint, assumption, and release-condition statuses match their dispositions;
- baseline version or date, approval authority, approval date, and change history are updated together;
- the Intake Brief distinguishes historical proposals from current dispositions;
- the live project state, control items, milestones, work items, and authorization gates agree with the baseline;
- remaining unresolved or deferred items and their effect on planning are explicit; and
- a stale-state review finds no contradictory **Proposed**, **Pending**, **Open**, or blocked language outside preserved historical context.

Record the transition check as verification evidence in the Development Log or another linked artifact. If inconsistencies remain, keep the baseline Proposed or the affected work unready until they are corrected or explicitly dispositioned.

#### Reusable Expanded Template Set

When this protocol is used from its source repository, `templates/requirements-intake/` provides reusable expanded-mode templates for source registration, Intake Briefs, validation dispositions, normalized baselines, and baseline-transition checks.

The templates implement this standard but do not replace it. Projects may adapt their structure and remove inapplicable optional sections while preserving authority, source events, status, strength, traceability, validation dispositions, and transition evidence. Do not fill reusable originals with project-specific data; copy them into the project or reproduce their required fields in an authorized artifact.

Expanded Intake Artifact Mode is appropriate when sources, stakeholders, ambiguity, or approval history benefit from separate reviewable artifacts.

#### Compact and Expanded Intake Artifact Modes

Intake Artifact Mode controls how requirements-intake information is packaged, not process rigor or how the approved requirements baseline is divided for development. Both modes must preserve source events, authority, explicit intent, derived assumptions/questions, requirement status and strength, validation dispositions, traceability, approval metadata, and baseline-transition evidence.

**Compact Intake Artifact Mode** may combine source registration, Intake Brief, normalized baseline, validation dispositions, and transition evidence in one `REQUIREMENTS.md` or another clearly identified artifact when all of these conditions are true:

- source input and approval authority are few, clear, and non-conflicting;
- scope is small enough for one person to review coherently;
- ambiguity and open controls are limited and do not require independent stakeholder workflows;
- security, privacy, legal, regulatory, safety, financial, migration, and operational consequences are low enough not to require dedicated review artifacts;
- source and validation history remain readable without obscuring the current approved baseline; and
- one artifact can be maintained without competing current and historical statements becoming ambiguous.

`templates/requirements-intake/COMPACT_REQUIREMENTS_INTAKE.template.md` provides a reusable compact structure. A very small project may embed the same logical sections in its main continuity document, but it must keep source content, intake analysis, current baseline, and historical dispositions visibly distinct.

Use **Expanded Intake Artifact Mode** when any of these conditions applies:

- multiple sources or authorities conflict or require separate approval;
- requirements are numerous, high-impact, regulated, safety-sensitive, security-sensitive, or operationally complex;
- several teams or agents need independent review or ownership boundaries;
- source artifacts must retain their own format or immutable provenance;
- open questions, assumptions, or validation events make one file difficult to understand; or
- audit, contractual, migration, compatibility, or release evidence needs an independent lifecycle.

Review artifact-mode suitability when new sources, stakeholders, controls, risks, or scope arrive. If Compact Intake Artifact Mode no longer qualifies, create a work item to expand the artifacts before further requirement changes become difficult to trace. Conversion must preserve identifiers, source events, dispositions, history, and links; it must not reset or rewrite the baseline.

Do not use Compact Intake Artifact Mode merely to hide unresolved complexity or reduce visible documentation. Do not use Expanded Intake Artifact Mode merely to appear rigorous when separate files add no independent value.

Intake Artifact Mode is independent of **Requirements Architecture**:

- **Monolithic Requirements Architecture** keeps the approved baseline in one primary requirements artifact.
- **Modular Requirements Architecture** divides the approved baseline into governed global, module, cross-cutting, and interface artifacts with an authoritative index and dependency model.

A small project commonly uses Compact Intake Artifact Mode with Monolithic Requirements Architecture. A large project commonly uses Expanded Intake Artifact Mode with Modular Requirements Architecture. Other combinations are possible when their independent eligibility rules are satisfied. Compact intake does not provide scoped context loading, and modular requirements do not remove intake authority or traceability obligations.

The detailed Modular Requirements Architecture and Scoped Context Loading standards are defined by later protocol sections and must not be inferred from Intake Artifact Mode.

#### Normalized Baseline Contract

The normalized requirements artifact must identify, as applicable:

- product purpose, intended outcomes, users, and stakeholders;
- goals and success measures;
- functional, data, interface, and quality requirements;
- in-scope and out-of-scope boundaries;
- constraints and dependencies;
- assumptions, open questions, risks, and deferred topics;
- acceptance and release conditions;
- source-to-requirement traceability; and
- baseline status, authority, version or date, and change history.

Sections that do not apply may be omitted or marked not applicable. The structure must be only as detailed as needed to support reliable planning and verification.

#### Normalized Requirement Strength

Requirement **status** and **strength** are separate:

- Status describes lifecycle and authority, such as **Proposed**, **Approved**, **Rejected**, **Deferred**, or **Superseded**.
- Strength describes the obligation created by an approved item.

Use these strength values:

- **Required** — the outcome or constraint must be satisfied for the applicable scope. Use a clear “must” or “must not” statement and acceptance criteria when verification is needed.
- **Preferred** — the outcome is desired and should guide design or tradeoffs, but it does not independently block acceptance unless an authorized requirement explicitly says otherwise. Record a material departure and its reason.
- **Optional** — the capability or characteristic is permitted but is not required or expected for the current baseline. Do not create implementation work for it without prioritization or promotion.

A prohibited behavior is normally expressed as a **Required** negative requirement rather than as a separate strength. **Deferred** is a status or scope disposition, not a weaker obligation.

Do not combine Required, Preferred, and Optional outcomes in one requirement when they need different planning, acceptance, or change treatment. Split them into separately identified items. When source language such as “should,” “ideally,” “maybe,” or “prefer” is ambiguous, preserve that wording and obtain authority before normalizing it into a stronger or weaker obligation.

An approved baseline must make strength explicit whenever readers could reasonably disagree. Approval of a Preferred or Optional item does not convert it into Required. The protocol's own rule language in section 1.2 governs process behavior; strength labels in a requirements artifact govern product obligations.

Implementation work must not be marked **Ready** until the requirements it depends on are approved or the responsible authority has explicitly authorized provisional work with recorded boundaries and risk. Once a normalized baseline is approved, maintain it under the Requirements Traceability and Change Standard.

### 3.2 Modular Requirements Architecture Standard

Modular Requirements Architecture divides an approved requirements baseline into bounded, governed parts so that a large project can evolve without relying on one increasingly difficult document. Its purpose is to improve comprehension, ownership, change analysis, and coordination while preserving one coherent baseline.

Modularity changes where requirements are maintained; it does not reduce their authority, quality, traceability, or approval obligations. A project must not split requirements merely to make files smaller when the resulting boundaries add navigation and synchronization cost without clarifying responsibility or dependencies.

#### Adoption and Transition

A project should adopt Modular Requirements Architecture when one or more of these conditions applies:

- the approved baseline can no longer be reviewed coherently as one artifact;
- distinct product areas have durable scope and ownership boundaries;
- teams or agents need to change separate requirement areas concurrently;
- cross-cutting qualities or shared interfaces affect several product areas and require coordinated governance;
- different requirement areas have independent delivery, approval, or change lifecycles; or
- change-impact analysis is unreliable because dependencies are difficult to identify.

The architecture decision must be recorded in the project state or Decision Log. It must identify why modularization is justified, the initial boundaries, and who is responsible for maintaining the index. A project may remain monolithic while these conditions do not justify the additional structure.

Transitioning an existing baseline must preserve approved meaning, stable requirement identifiers, source traceability, validation history, status, strength, and supersession history. Record old-to-new locations and verify that no current requirement was lost, duplicated as independently authoritative, or unintentionally changed. Modularization alone does not authorize a requirement change.

#### Required Logical Structure

A modular baseline must define these logical elements:

1. **Authoritative Requirements Index** — the entry point and manifest for the complete baseline.
2. **Global requirements** — product-wide purpose, scope, terminology, constraints, and requirements that apply to every relevant module.
3. **Module requirements** — capabilities, rules, data, acceptance criteria, and boundaries owned by one defined product or system area.
4. **Cross-cutting requirements** — qualities or policies that apply across multiple modules, such as accessibility, security, privacy, performance, observability, localization, or compliance.
5. **Interface requirements** — externally observable contracts and interactions between modules or with external systems, including relevant data, behavior, compatibility, and failure expectations.
6. **Dependency model** — explicit relationships showing which modules, requirements, cross-cutting concerns, and interfaces depend on or affect one another.

These are logical roles, not mandatory filenames. A small modular baseline may combine compatible roles in a few clearly separated artifacts; a larger one may use multiple artifacts. Every requirement must have one authoritative home even when indexes, summaries, or dependency views refer to it.

#### Authoritative Requirements Index

The Authoritative Requirements Index is the sole entry point for discovering the current modular baseline. It must identify:

- baseline name, version or date, lifecycle status, approval authority, and approval date;
- the location and authority of global requirements;
- every current module, cross-cutting, and interface requirements artifact;
- each artifact's stable identifier, bounded purpose or scope, owner, status, and current version or revision;
- direct dependencies or a link to the authoritative dependency model;
- superseded, retired, proposed, or experimental artifacts when they could otherwise be mistaken for current requirements; and
- the baseline change history or its authoritative location.

The index should be concise enough to scan at session start. It routes readers to authoritative content and must not reproduce complete requirements or become a competing baseline. Adding, removing, renaming, splitting, merging, or superseding an indexed artifact is a governed baseline change and must update the index in the same coherent change set.

#### Boundaries, Identifiers, and Ownership

Each module must state its purpose, in-scope and out-of-scope responsibilities, owned concepts or data where relevant, provided and consumed interfaces, dependencies, and applicable cross-cutting requirements. Boundaries should follow durable product or system responsibilities rather than temporary work assignments, repository folders, or the preferences of one agent.

Requirement identifiers must be unique across the complete baseline and remain stable when a requirement moves between artifacts. Identifiers should make their logical home recognizable when practical, but location must not be encoded so rigidly that a move requires replacing the identity. Artifact, module, interface, and cross-cutting concern identifiers must also be stable wherever plans, decisions, tests, or dependencies refer to them.

Every indexed artifact must have one accountable owner. Ownership means responsibility for consistency, review, and maintenance; it does not grant authority to approve product changes unless that authority is explicitly assigned. A requirement that affects several modules must still have one authoritative home and owner, with affected modules linked as consumers or dependencies.

#### Interfaces, Cross-Cutting Concerns, and Dependencies

An interface requirement must identify its providers and consumers, contract or behavior, relevant inputs and outputs, constraints, error or failure behavior, and compatibility or version expectations when applicable. Implementation details belong here only when they are approved constraints rather than design choices.

A cross-cutting requirement must define its applicability: the modules, interfaces, data, users, environments, or lifecycle stages it governs. A module may reference an applicable cross-cutting requirement but must not copy it as a second independently maintained requirement.

The dependency model must record relationships that affect planning, implementation, validation, release, or change impact. Each material dependency must identify the dependent and depended-on items, the nature of the dependency, and any condition or version constraint needed to interpret it. The model may be a table, graph, or structured metadata as long as it remains authoritative and reviewable.

No category automatically overrides another. If global, module, cross-cutting, or interface requirements conflict, record the conflict as a control item and obtain the appropriate disposition. Do not resolve it through file order, apparent specificity, ownership, or agent inference.

Before approving a modular baseline change, review its effect on directly and transitively dependent requirements, interfaces, modules, acceptance criteria, work items, tests, decisions, risks, operations, and releases. Record material impacts and update affected artifacts together or explicitly identify controlled follow-up work.

#### Architecture Conformance

A modular requirements baseline is ready to direct normal implementation only when:

- its Authoritative Requirements Index identifies the complete current baseline;
- all current artifacts have explicit scope, authority status, ownership, and stable identity;
- every current requirement has one authoritative home;
- module boundaries, applicable cross-cutting concerns, interfaces, and material dependencies are discoverable;
- conflicting or unresolved requirements are visible and appropriately control dependent work;
- baseline approval and transition checks cover the baseline as a whole, not merely individual files; and
- traceability can follow a requirement from its source and authority through work and verification without relying on conversation history.

Modular Requirements Architecture does not by itself authorize an agent to omit other requirements artifacts from review. An agent may use a bounded requirements context only under the Scoped Context Loading Standard.

### 3.3 Scoped Context Loading Standard

Scoped Context Loading is the controlled selection of the requirements and project information needed to perform one bounded work item safely. It allows an agent to concentrate on a coherent part of a modular project without repeatedly loading the complete requirements baseline.

A **Scoped Context Set** is the authoritative material selected for the work. A **Context Manifest** records what was selected, why it is sufficient, and when it must be expanded. Scoped loading changes neither approved product scope nor the authority of omitted requirements; it is an execution aid, not a permission to ignore the rest of the baseline.

#### Eligibility and Default Behavior

Scoped Context Loading may be used only when:

- the project has a conformant Modular Requirements Architecture under section 3.2;
- the Authoritative Requirements Index and dependency model are current enough to support reliable selection;
- the work item has a bounded outcome and identifies its governing requirement, goal, defect, risk, or other approved need; and
- unresolved controls do not make the affected requirements or boundaries uncertain.

A project with a Monolithic Requirements Architecture must continue loading its complete current requirements baseline. If a modular project's index, boundaries, applicability mappings, or dependencies are missing, stale, contradictory, or unreliable, use the complete baseline or correct the architecture before relying on scoped loading.

Scoped loading should be proportional to the work. Include everything that can materially direct or constrain the outcome, but do not load unrelated modules merely because they exist.

#### Required Context Selection

For every scoped work item, the agent must load:

1. the complete current Project Development Continuity Protocol and live project state;
2. the current Authoritative Requirements Index and applicable baseline metadata;
3. the work item, its acceptance criteria, and the authoritative artifacts containing the requirements or controls that justify it;
4. applicable global and cross-cutting requirements;
5. provided or consumed interface requirements that the work may affect or depend on;
6. material upstream and downstream dependencies needed to understand behavior, sequencing, compatibility, and change impact; and
7. relevant governing decisions, assumptions, risks, known issues, verification expectations, and implementation artifacts.

An index entry, summary, generated view, or earlier session's notes may help route selection but must not replace authoritative content that governs the work.

#### Selection Procedure

Before changing implementation or requirements, the agent must:

1. **Validate the entry point.** Confirm the baseline identity, version, status, index currency, and work-item readiness.
2. **Anchor the work.** Identify the target requirement, module, interface, control, or other approved item and load its authoritative home.
3. **Apply governing scope.** Load global and cross-cutting requirements whose applicability includes the target, affected data, users, environment, interface, or lifecycle stage.
4. **Traverse relationships.** Follow provided and consumed interfaces plus upstream and downstream dependency paths until the documented boundaries show that additional items cannot materially direct or be affected by the work.
5. **Include execution context.** Load relevant decisions, risks, code, tests, documentation, and recent evidence needed to validate the stated project state and perform the work.
6. **Record the Context Manifest.** Make the selected context and its sufficiency reproducible before substantial or irreversible work begins.
7. **Reassess during work.** Expand the set whenever discoveries invalidate its recorded boundary or assumptions.

The resulting dependency closure need not include every transitively connected artifact. Stop traversal when an authoritative boundary, applicability rule, interface contract, or dependency description demonstrates that the work cannot materially affect or be constrained by the next item. If that stopping point depends only on an agent's intuition, the context is not yet proven sufficient.

#### Context Manifest

The Context Manifest must record:

- work-item identifier and intended outcome;
- baseline and index version or revision used;
- applicable target requirement, module, interface, and control identifiers;
- loaded requirements artifacts and their versions or revisions;
- the applicability rules, interfaces, and dependency paths that determined selection;
- materially adjacent artifacts intentionally excluded and the authoritative basis for exclusion;
- unresolved context uncertainty and its effect on the work;
- expansion triggers specific to the work; and
- preparer and preparation date.

The manifest may be a concise part of the work item, the continuity document, or a linked supporting artifact. It should reference authoritative material rather than copy it. It does not need to list routine source files that are discovered and inspected during implementation unless their inclusion is important to a boundary or handoff decision.

When this protocol is used from its source repository, `templates/scoped-context/CONTEXT_MANIFEST.template.md` provides a reusable manifest structure. Copy and adapt it or reproduce its required fields in an authorized artifact; do not fill the reusable original with project-specific data. The template implements this standard but does not replace the selection reasoning required by it.

A reused manifest must be checked against the current baseline, index, project state, work scope, and repository. Do not assume an earlier context remains sufficient after a requirement, dependency, interface, decision, or implementation change.

#### Safe Exclusion Rules

An artifact may be excluded only when the current index and authoritative applicability or dependency information show that:

- it is outside the work item's product and system boundary;
- no applicable global, cross-cutting, interface, or dependency relationship connects it materially to the work;
- the planned change and verification cannot alter its behavior, data, contract, acceptance, or release condition; and
- no open control item or known discrepancy makes that conclusion uncertain.

Do not exclude authoritative material solely because of context limits, expected resource savings, agent familiarity, file location, ownership by another team, previous successful work, or an assumption that implementation components are isolated.

#### Expansion and Full-Review Triggers

The agent must expand the Scoped Context Set when:

- implementation or verification crosses a recorded module, data, interface, or ownership boundary;
- a shared contract, dependency, cross-cutting concern, or global behavior may change;
- an unexpected test failure or implementation behavior indicates an unrecorded relationship;
- a loaded artifact conflicts with the index, another requirement, the working system, or project state;
- a new assumption, question, risk, or decision affects context selection;
- the work item's outcome or affected scope grows beyond the manifest; or
- a requirement, interface, or dependency change creates new affected consumers.

Pause materially irreversible work while expanding the context. Update the manifest, load and inspect the newly relevant authoritative material, reassess acceptance and verification, and update the work item when the discovery changes its intended scope. If the context cannot be bounded reliably, use the complete baseline or record the work as blocked.

Use a complete-baseline review instead of scoped loading when:

- establishing or validating the initial modular architecture;
- changing the Authoritative Requirements Index, module boundaries, baseline-wide dependency model, or ownership structure in a way that may alter baseline completeness;
- changing a global or cross-cutting requirement whose applicability cannot be bounded reliably;
- performing a broad migration, module split or merge, or multi-interface redesign whose impact is not already explicit;
- making a milestone or release acceptance claim that covers the complete baseline; or
- the completeness or consistency of the index, dependency model, or selected context is in doubt.

#### Completion and Handoff

Before completing the work item, verify that the final Context Manifest matches the scope actually changed and tested. Record any newly discovered relationship in the authoritative index, interface definitions, dependency model, requirements, or project controls as appropriate; do not leave durable dependency knowledge only in the manifest or Development Log.

Completion evidence must identify the requirements and acceptance criteria verified under the selected baseline version. The continuity update must leave the next agent able to reproduce the context selection, understand any exclusions or expansions, and identify the next safe action without relying on conversation history.

Scoped Context Loading is independent of Compact or Expanded Intake Artifact Mode. Intake mode governs how source input becomes an approved baseline; Requirements Architecture governs how that baseline is organized; Scoped Context Loading governs which parts of a conformant modular baseline an agent reads for one bounded work item.

### 3.4 Requirements Traceability and Change Standard

Every requirement used to direct implementation must have a stable identifier or an unambiguous authoritative reference. The project state must identify the requirements artifact, its status, and its authority. Draft, proposed, approved, superseded, and rejected requirements must not be treated as interchangeable.

Development work must trace to the requirement, goal, defect, risk, or other approved project need it advances. Verification evidence must trace back to the acceptance criteria or quality expectation it supports. Traceability may be recorded in tables, work items, tests, or linked supporting artifacts; it need not duplicate the complete requirement text.

An agent must not silently reinterpret, weaken, expand, or replace a requirement. When a requirement is ambiguous, conflicting, infeasible, or inconsistent with the implementation, record a control item and resolve it through the appropriate authority before making an irreversible or materially divergent change.

A requirement change must record:

- the added, changed, removed, or superseded requirement identifier;
- the source and authority for the change;
- the reason for the change;
- impact on scope, decisions, architecture, work items, tests, documentation, risks, and delivered behavior;
- any migration, compatibility, or rework required; and
- the date and resulting requirement status.

After an approved change, update affected plans and acceptance criteria before claiming related work complete. Preserve superseded requirement history or a durable link to it; do not edit history to make the new requirement appear original.

The protocol does not require one requirements methodology or document format. Use the lightest structure that preserves authority, stable identity, impact awareness, and verification traceability for the project.

#### Change and Enhancement Intake

When a request arrives after the project has an established baseline or implemented behavior, use a proportional **Change and Enhancement Intake** before materially irreversible implementation. This is the entry path for defects, new capabilities, behavior modifications or removals, refactors, maintenance, and operational, security, data, or compatibility changes. It connects the request to the existing requirements, work-item, verification, and reconciliation standards; it does not require the project to repeat unaffected initial intake.

An explicit, unambiguous request from the appropriate authority may both approve the requested outcome and authorize implementation. Do not manufacture a redundant approval gate. The request must still be registered, compared with the baseline and actual implementation, assessed for material impact, and converted into bounded Ready work. When the intended outcome or a material consequence is ambiguous, preserve the request without treating the missing decision as approved.

For each change request:

1. **Register the request and authority.** Assign a stable change-request identifier or unambiguous reference, preserve the request as a dated source event or durable faithful link, and identify the requesting and approval authority.
2. **Inspect current truth.** Compare the request with the approved baseline, current implementation, active work, known issues, and relevant decisions. Do not assume the request describes the existing behavior accurately.
3. **Classify the primary change.** Use **Defect / conformance**, **Enhancement / behavior change**, **Refactor / maintenance**, **Operational / security / data / compatibility**, or **Discovery / decision**. A request may have secondary effects; classification guides the review and does not grant authority.
4. **Determine baseline effect.** Record **No baseline change**, **Baseline delta required**, or **Undetermined** with rationale. A defect or refactor may use No baseline change only when it preserves an approved outcome or another explicit project need. A feature, behavior change, or removal that alters approved intent must identify added, revised, removed, or superseded requirements and update baseline version, history, traceability, and acceptance criteria. Undetermined requests remain in assessment or discovery before affected implementation becomes Ready.
5. **Review material impact.** Proportionally assess affected users and behavior; scope and acceptance; active work; architecture, interfaces, and dependencies; data, migration, rollback, and recovery; security, privacy, legal, and operational controls; compatibility and release; tests and regression; documentation and stakeholder communication; and known risks. Apply section 3.2's transitive review when a modular baseline is affected.
6. **Record the disposition.** Cite the authority and source for **Approved**, **Revised**, **Rejected**, **Deferred**, or **Delegated** outcomes and any constraints. When a baseline delta is required, apply section 3.1's validation and transition controls to the proposed revised baseline before dependent implementation is Ready; review unaffected requirements only as needed to establish consistency.
7. **Prepare bounded work.** Link each work item to the change request and governing requirement, defect, risk, or approved need. Define dependencies, observable acceptance criteria, targeted verification, and proportionate regression, migration, compatibility, rollback, security, data, operational, or documentation checks before marking it Ready. Use a discovery or decision item first when safe implementation cannot yet be bounded.
8. **Close and reconcile.** After implementation, verify the requested outcome and materially affected existing behavior, then reconcile the baseline and history, implemented-capability summaries, overview, decisions, risks, operating guidance, release information, project state, and handoff. Preserve residual work and limitations rather than treating completion of one work item as completion of the entire change.

Use the lightest durable record that satisfies this workflow. A small defect, refactor, or low-impact adjustment may keep the change intake in its source event and work item. Use a separate change-request artifact when the request has material ambiguity, multiple decisions or work items, a baseline delta, cross-component effects, migration or compatibility obligations, an independent approval history, or a distinct lifecycle. Active change requests must remain visible in live project state; completed, rejected, deferred, or superseded requests may move to concise history once their disposition and links remain durable.

When this protocol is used from its source repository, `templates/requirements-intake/CHANGE_REQUEST.template.md` provides an optional reusable structure for a material change. Projects may adapt or embed its fields while preserving the workflow's authority, baseline-effect, impact, readiness, verification, and closure boundaries.

### 3.5 Stakeholder Project Overview Standard

A **Project Overview** explains the product or project in concise, plain language for sponsors, business stakeholders, operators, new contributors, and other readers who should not need to interpret the full requirements baseline, implementation, or continuity record.

The overview is a derived communication artifact. It does not approve requirements, change scope, prove implementation, replace operating instructions, or override the sources of truth in section 3. If it conflicts with approved requirements, the working system, or current project state, correct the overview or record the discrepancy; do not reinterpret the authoritative source to preserve the summary.

#### Applicability

A project must maintain a Project Overview when any of these conditions applies:

- a nontechnical or mixed audience participates in sponsorship, approval, acceptance, operation, or handoff;
- the project has multiple user roles or material capabilities that are not explained adequately by its one-sentence purpose;
- a milestone, demonstration, release, or transfer requires an accessible account of current functionality and limitations; or
- the project owner requests a stakeholder-facing explanation.

A small technical-only project may use its README as the overview when that README satisfies this standard. If none of the applicability conditions is present, a separate overview is optional. Record the overview location, README substitution, or reason for omission under **Requirements and Key References** when the choice affects handoff or stakeholder communication.

#### Required Content

The overview must communicate, as applicable:

- what the project is, why it exists, and who it serves;
- the major capabilities people can use now, grouped in a way the intended audience can understand;
- a short representative user or operating journey when it materially improves comprehension;
- important scope boundaries, unsupported uses, and current limitations;
- the current lifecycle or delivery stage, including a clear distinction between working, planned, experimental, and unavailable functionality; and
- links to authoritative requirements, current project state, operating guidance, or support information for readers who need more detail.

Keep the main explanation concise and avoid internal identifiers, architecture terminology, implementation details, and exhaustive acceptance criteria unless they are needed to prevent a material misunderstanding. A small status table or flow may be used when it makes capability or lifecycle distinctions clearer than prose.

#### Accuracy and Maintenance

Every material capability, status, audience, and boundary statement must be supported by the approved requirements and current project state or working system. The overview may omit low-level detail, but it must not exaggerate readiness, describe planned behavior as available, hide material limitations, or turn assumptions into commitments.

Create the overview as soon as an applicability condition is present and enough authoritative information exists to describe the project truthfully. Before stakeholder validation, milestone closure, release, or handoff, review it against the current baseline and implementation. Reconcile it whenever product-facing capabilities, audiences, scope boundaries, maturity, supported operation, or important limitations materially change.

When this protocol is used from its source repository, `templates/project-overview/PROJECT_OVERVIEW.template.md` provides a reusable structure. Projects may adapt or shorten it while preserving truthful capability status, boundaries, audience, and links to authoritative detail.

---

## 4. Required Agent Workflow

### 4.1 Start of Every Session

Before changing the project, the agent must:

1. Read this document completely.
2. Read the referenced requirements and any documents relevant to the next work item. When using Scoped Context Loading, establish or revalidate the Context Manifest under section 3.3.
3. Inspect repository status and the implementation relevant to that work item.
4. Validate that **Current State** and **Next Actions** still match the repository.
5. Record any important discrepancy before proceeding.
6. Select the highest-priority ready action, unless the user explicitly assigns different work.

When a required document read returns visibly truncated or otherwise incomplete content, the agent must continue reading that document in bounded, ordered segments through the end of the file before relying on it. No particular command, segment size, navigation artifact, or machine marker is required. If completeness cannot be established, record the limitation and do not claim the required read complete or proceed on assumptions that depend on unread content. This recovery rule does not itself require document restructuring or archiving; section 6.1 separately governs proportional archiving when live records become hard to scan.

The agent should inspect only enough of the codebase to validate and perform the selected work. A full codebase rediscovery is not the default.

#### Repository Scope and Information Boundaries

A working directory defines the intended work scope but is not, by itself, an enforced information boundary. When authorized work is limited to a subdirectory of a larger repository, the agent must path-limit repository-aware status, diff, ignored/untracked-file, file-listing, and search operations to that authorized root. For example, from the project root use `git status --short -- .` rather than an unscoped repository-wide status command. Command scoping reduces accidental exposure but does not prove isolation.

Before using isolation as evidence for a rehearsal or protocol test, select and record the applicable environment class:

- **Internal rehearsal** — unrelated repository or conversation context may be accessible; record that limitation and make no isolation claim.
- **Operationally separate project** — the project operates from a separate project location or repository, but any accessible external files or prior context must still be disclosed.
- **Isolation test** — the workspace or sandbox and execution-session context technically prevent access to unrelated project material.

Do not claim clean-room or standalone isolation merely because work uses a different directory, branch, or worktree. If out-of-scope information is accessed, stop using it, record the occurrence and the smallest safe description of what was exposed, assess the effect on evidence and claims, and either continue with an explicit limitation or restart under an adequate boundary. Do not copy unrelated sensitive or proprietary content into the project record.

### 4.2 Before a Unit of Work

The agent must define or confirm:

- the requirement or goal being advanced;
- the intended outcome;
- the files or components likely to be affected;
- acceptance criteria;
- the verification method; and
- relevant constraints, risks, assumptions, or dependencies.

If the work cannot be performed safely without a product or technical decision outside the agent's authority, record it as blocked and ask for that decision.

#### Technology Selection Work

Before work that commits the project to a technology stack, the agent must prepare a **Technology Selection Brief** and obtain either the user's selection or the user's explicit delegation of the decision.

The brief must:

- present two or three coherent, requirements-compatible stack profiles when credible alternatives exist;
- identify one profile as the agent's recommendation and explain why it best fits the requirements and constraints;
- describe each profile's application shape, language/runtime, frontend and backend approach, persistence, verification tooling, and important operational implications;
- state material advantages, disadvantages, risks, reversibility, and expected setup effort;
- distinguish tooling that is already available from tooling that would need to be installed; and
- identify installation, network, licensing, account, or approval requirements without treating missing components as automatic disqualification.

Offer complete, compatible profiles rather than an unlimited menu of independently selected technologies. The user may accept a profile, select another profile, request a controlled variation, or explicitly delegate the choice to the agent.

Local availability is a readiness and cost consideration, not an automatic architecture-selection criterion. A credible option must not be excluded solely because its runtime, framework, database, or tools are not installed. Conversely, the agent must not install missing tooling until the option has been selected and any required installation authority has been obtained.

The selected profile, selection authority, rationale, rejected alternatives, and consequences must be recorded in the Decision Log. No scaffolding, dependency installation, or technology-constraining implementation may begin before that decision is accepted.

### 4.3 During Work

The agent must:

- keep changes within the selected unit of work;
- preserve unrelated user changes;
- update the plan when discoveries materially change scope or direction;
- record durable decisions when they are made; and
- avoid claiming completion before verification.

### 4.4 End of Every Unit of Work

Before reporting completion, the agent must update this document to:

1. change the relevant work item's status;
2. summarize what changed and why;
3. record verification performed and its result;
4. update the current project state;
5. add or resolve decisions, assumptions, questions, risks, and blockers;
6. identify the next actionable work in priority order; and
7. add a concise entry to the development log.

#### Change-Impact Reconciliation

Before completing a unit of work, the agent must reconcile materially changed implementation facts with affected current summaries and supporting artifacts. Use the work's actual change surface to identify applicable records, which may include the stakeholder Project Overview, technical shape, plan status, dependency records, setup or run instructions, deferred-work lists, and next actions. Correct contradictory current information or record the discrepancy as an open control item.

Keep this review proportional. It does not require a repository-wide search, inspection of unaffected artifacts, or rewriting historical records merely because current facts changed. Requirements-validation responses remain governed by the separate reconciliation rules in section 3.1.

If verification was not possible or failed, the work must not be marked complete. Record its actual state and the remaining action.

### 4.5 End of Every Session

The document must leave the project in a restartable state. A new agent should be able to answer these questions quickly:

- What are we building and why?
- What is in and out of scope?
- What has been completed?
- What is currently true about the implementation?
- What work is active or blocked?
- What should be done next?
- What decisions and constraints must not be lost?
- How will the next work item be verified?

### 4.6 Failure, Interruption, or Lost Session

When a command fails, approval is declined, a tool becomes unavailable, or a session may end before the unit of work is complete, the agent must create a recovery checkpoint before attempting unrelated work. Record:

- the work that is already present, including important paths;
- the last successful verification and its evidence;
- the failed or incomplete verification and the observed symptom;
- any known process, port, lock, temporary file, or test-data state;
- whether cleanup is required and how to perform it safely;
- the exact next recovery action; and
- the truthful work status: **In Progress**, **Verification**, or **Blocked**.

Use **Verification** when implementation is believed complete but a required check failed or remains unfinished. Use **Blocked** only when a named external condition prevents further progress. A recoverable command failure is not by itself a blocker.

On recovery, the agent must inspect current state before cleanup. It must not stop a process using only a stale numeric process identifier; first confirm that the process belongs to the project, or stop only a process handle created and retained by the recovery attempt. Re-run the smallest relevant successful check before resuming the incomplete verification. Do not repeat implementation merely because its verification was interrupted.

### 4.7 Verification and Evidence Standard

Verification must be appropriate to the acceptance criteria, change risk, and type of outcome. Prefer the smallest reliable set of checks that can demonstrate the claim; add broader checks when changes can affect multiple components, security, data integrity, compatibility, operations, or release readiness.

Before execution, identify the required verification method. After execution, record enough evidence for another agent or person to understand what was checked and reproduce it when practical. Evidence must include:

- the command, test, inspection, or observation performed;
- the relevant scope, environment, and configuration;
- the absolute date and result;
- meaningful counts or outcomes, such as passed, failed, skipped, warnings, or observed behavior; and
- limitations, unverified conditions, or follow-up checks still required.

When acceptance depends on the finalized bytes or inventory of an output that also records verification, the verification method must define a durable, non-circular evidence boundary before execution. Finalize the checked content before evidence for its final state is recorded in a separately authorized seal, digest, receipt, independent verifier record, or enclosing version, checkpoint, or transport record. Use an existing durable boundary when it is adequate; no separate artifact, hash algorithm, manifest format, or independent coordinator is universally required. Distinguish initial, intermediate/post-write, and final checks when those stages materially affect the claim. Verification of a pre-final state or ephemeral conversation or handoff text must not be the sole evidence for the finalized state. If no durable non-circular final evidence is available, record the final check as **Not run** or **Inconclusive** as appropriate and do not treat the acceptance criterion as satisfied.

Use verification results truthfully:

- **Passed** means the identified check completed successfully and supports only the claims within its scope.
- **Failed** means the check completed and found a defect, unmet criterion, or unacceptable result.
- **Not run** means no result exists, including when tooling, access, time, environment, or approval prevented execution.
- **Inconclusive** means the check ran but could not reliably support a pass or fail conclusion.

Do not treat compilation, startup, an HTTP success response, source inspection, automated tests, or manual review as interchangeable. Each provides evidence only for what it actually exercises. When acceptance requires multiple forms of evidence, all required forms must be completed before the work item is marked **Complete**.

Failed, inconclusive, or unperformed required verification must keep the work item in **In Progress**, **Verification**, or **Blocked**, as reality requires. An agent must not omit an unfavorable result, rerun until a pass while hiding prior relevant failures, or claim success based solely on expected behavior.

Verification must avoid damaging real project or user data. Use isolated test data and tracked temporary resources when practical. Record cleanup obligations and preserve diagnostic evidence needed for recovery before removing temporary artifacts.

#### Application-Data Backup and Recovery Evidence

When a unit of work defines, implements, documents, or verifies an application-data backup or recovery capability, its procedure and evidence must identify:

- the supported operating state and consistency boundary;
- whether shutdown must be graceful and how completion is confirmed;
- whether forced termination or crash recovery, online backup, and provider-managed snapshots are supported, unsupported, or separately verified;
- the files, logs, sidecars, volumes, or provider-managed resources that form the recoverable set; and
- how restore verification confirms representative committed data under the claimed conditions.

Do not treat graceful shutdown, forced termination, crash recovery, online backup, and provider-managed backup as interchangeable evidence. A passing result supports only the tested conditions. Untested or unavailable recovery modes must remain explicit limitations. Restore verification must use isolated non-production data when practical and must identify application, schema, configuration, or environment compatibility assumptions that affect the result.

### 4.8 Concurrent Work and Ownership Standard

Before beginning implementation, an agent must inspect the Active Work table for existing **In Progress** or **Verification** items and identify the files, components, or decisions likely to overlap. Parallel work is permitted only when ownership and boundaries are clear enough to avoid competing changes or incompatible direction.

When an agent starts a work item, it must promptly record:

- the work item as **In Progress** or **Verification**, as appropriate;
- an identifiable owner, agent, or session;
- the intended outcome and relevant scope boundary; and
- dependencies on other active work.

Normally one owner coordinates a work item at a time. Multiple agents may contribute when the item is explicitly divided into bounded subtasks and one integration owner is identified. Agents working in parallel must not independently change the same requirement interpretation, decision, shared interface, migration, generated artifact, or high-conflict file without recorded coordination.

An agent must not assume an active owner has abandoned work merely because that owner is unavailable. Before taking over, inspect the repository and continuity record, determine the last durable checkpoint, and record the ownership transfer and reason. Preserve valid partial work and continue from its verified state rather than restarting by default.

When parallel changes converge, the integration owner must:

- inspect the combined result rather than evaluating contributions in isolation;
- resolve interface, behavior, documentation, and decision conflicts;
- run verification appropriate to the integrated change set; and
- update current state, ownership, evidence, and follow-up work.

If safe coordination cannot be established, pause the overlapping item and record a control item. Do not use concurrency merely to make a single tightly coupled unit of work appear faster.

---

## 5. Status Model

Use only these work-item statuses:

- **Proposed** — identified but not yet accepted into the active plan.
- **Ready** — sufficiently defined and unblocked.
- **In Progress** — currently being implemented; normally only one item per agent.
- **Blocked** — cannot proceed until a named condition is resolved.
- **Verification** — implementation is finished but required checks remain.
- **Complete** — acceptance criteria and verification have been satisfied.
- **Deferred** — intentionally postponed with a recorded reason.
- **Cancelled** — intentionally abandoned with a recorded reason.

Status must describe reality, not intention.

### 5.1 Work Item Quality Standard

A work item may be marked **Ready** only when:

- it links to a project goal, requirement, milestone, control item, or other explicit project need;
- its intended outcome is concrete and bounded;
- its acceptance criteria describe observable conditions of satisfaction;
- its verification method is identified and practical;
- relevant dependencies, constraints, risks, and required decisions are known; and
- no unresolved condition prevents work from starting safely.

A work item may be marked **Complete** only when:

- the intended outcome is present in the project;
- every acceptance criterion is satisfied;
- required verification has passed and evidence is recorded;
- affected project documentation and current state are updated;
- resulting decisions, discoveries, risks, issues, and follow-up work are recorded; and
- the handoff identifies the next actionable state.

If implementation is finished but required verification remains, use **Verification**, not **Complete**. If the item is too large to satisfy these conditions as one coherent outcome, split it before or during execution and update the plan.

Investigation and decision work may use an approved analysis, recommendation, or decision record as its outcome, but it must still define acceptance criteria and verification appropriate to that outcome.

### 5.2 Milestone and Release Closure Standard

Every milestone must describe an outcome and observable completion criteria. A milestone is not complete merely because its planned work items are closed or a target date has arrived.

A milestone may be marked **Complete** only when:

- its stated outcome and completion criteria are satisfied;
- all required work items are Complete, Cancelled with authority, or Deferred with recorded impact and authority;
- integrated behavior has been verified at the milestone boundary when separate work items interact;
- relevant requirements and decisions are traceable to resulting behavior and evidence;
- open control items have an explicit disposition compatible with the milestone outcome; and
- current state, operating documentation, and next milestones are updated.

Before declaring a release or final delivery ready, the project must also confirm:

- the requirements baseline and included scope are identified;
- required functional, quality, security, compatibility, data, and operational verification has passed or has an authorized documented exception;
- known issues, residual risks, deferred work, and unsupported conditions are visible to the receiving authority;
- installation, configuration, migration, rollback or recovery, operation, and verification instructions exist where relevant and have been checked;
- deliverable versions and repository revision are identifiable; and
- the live project state records release evidence, remaining obligations, and the post-release continuation or maintenance point.

#### Authorized Evidence Exceptions

When milestone or release closure relies on an authorized exception to otherwise required evidence, record:

- the source and scope of the granting authority;
- the unmet criterion or omitted evidence class and the reason for the exception;
- the narrower deliverable label or completion claim that remains justified;
- claims prohibited by the missing evidence;
- residual controls, risks, and obligations; and
- the condition and authority needed to reactivate or complete the omitted work.

An exception supports only the explicitly narrowed outcome. It must not exceed the granting authority, silently revise requirements, erase or hide an unfavorable result, or waive legal, contractual, security, safety, or other constraints that the authority cannot waive. If the exception changes scope or acceptance criteria, apply the normal requirements and decision traceability rules.

Release does not require production deployment unless the requirements define deployment as part of delivery. A prototype, internal handoff, library, document, model, or other artifact may be a release when its approved acceptance and delivery conditions are satisfied.

Do not close a milestone or release by silently moving unmet criteria out of scope. Scope changes, exceptions, cancellations, and deferrals must follow their normal authority and traceability rules.

---

## 6. Maintenance Rules

- Update the document in the same change set as the work it describes whenever practical.
- Use stable identifiers for requirements, milestones, work items, decisions, and risks.
- Use absolute dates in `YYYY-MM-DD` form.
- Keep **Current State** current; do not force a new agent to reconstruct it from the log.
- Keep **Next Actions** ordered, specific, and executable. Each ready action should describe an outcome, not merely a topic.
- Append meaningful events to the development log; do not rewrite historical facts. Corrections should reference the corrected entry.
- Summarize or archive obsolete detail when the file becomes difficult to scan, while preserving durable decisions and traceability.
- Do not include secrets, credentials, personal data, or large generated output.
- Prefer links to authoritative project artifacts over copying their full content into this document.
- Create a recovery checkpoint promptly after an interruption; do not wait for normal end-of-session maintenance.

### 6.1 Information Retention and Archiving Standard

The main continuity document must remain a practical entry point, not become a complete transcript of project activity. A new agent should be able to identify current direction, controls, and next work without reading archived history.

Keep these items in the live document:

- current project identity, goals, scope, and constraints;
- authoritative references and operating instructions;
- current implementation and repository state;
- active milestones, work items, and ordered next actions;
- governing accepted decisions and links to decisions they supersede;
- open assumptions, questions, blockers, risks, issues, and recovery checkpoints;
- recent completed work needed to understand the current state; and
- the latest verification evidence and handoff.

Historical detail may be archived when it no longer affects current execution and its volume makes the live document harder to scan. Typical candidates include older completed-work entries, resolved control items, superseded decision detail, and verification evidence replaced by a newer authoritative result.

Archiving must:

- move information to a version-controlled project artifact, not delete it;
- preserve stable identifiers, dates, authorship, outcomes, and meaningful evidence;
- add a link from the live document to the archive and state what period or identifiers it contains;
- retain a concise current-state summary so history is not required for routine continuation; and
- avoid creating two competing sources for current state.

Do not archive an active work item, unresolved control item, governing decision, current requirement, or information needed to execute the next action. Do not rewrite historical records merely to shorten them; corrections must remain traceable.

Review the document for archiving when a new agent must read substantial completed history before finding current state, when repeated tables are dominated by resolved entries, or when the Development Log materially exceeds the recent context needed for handoff. Archive only the sections causing the problem rather than splitting the document preemptively.

### 6.2 Supporting Artifact Standard

This document remains the project's main development entry point even when supporting artifacts are introduced. A supporting artifact is justified only when its subject requires more detail than the live document can carry without becoming difficult to navigate or maintain.

Appropriate supporting artifacts may include detailed requirements, architecture descriptions, interface specifications, data models, security or quality standards, test strategies, operating procedures, release plans, and archived history.

Every supporting artifact must:

- have a specific purpose and defined authority;
- be listed under **Requirements and Key References** with a stable location;
- identify its status and, when useful, its owner and last-updated date;
- use stable identifiers where its contents must be traced to requirements, decisions, or work items;
- be linked from the live section that depends on it; and
- leave a concise summary of its currently relevant information in this document.

Do not create a supporting artifact merely because a topic exists. Keep short, current information in the live document. Split information only when the added detail has independent value, a distinct maintenance lifecycle, or a clear audience and purpose.

One subject must not have multiple competing authoritative artifacts. When an artifact replaces another, update references and record whether the earlier artifact is superseded or archived. A supporting artifact must not become an alternative project entry point that requires an agent to guess which document governs current development.

At session start, an agent must read supporting artifacts relevant to the selected work item; it need not read every referenced artifact when the current task does not depend on them.

### 6.3 Version Control and Remote Recovery Standard

When a project uses version control, commits should form coherent recovery and review checkpoints. Prefer one bounded, verified unit of work per commit when practical. A commit must not knowingly mix unrelated user changes, temporary artifacts, secrets, or misleading completion claims with the intended project change.

Before creating a normal completion commit:

- inspect the included changes and repository status;
- run verification appropriate to the committed scope;
- update the live project state and related documentation;
- ensure generated, local, sensitive, and disposable artifacts are excluded; and
- use a concise message that describes the completed outcome.

Incomplete work may be committed when a durable recovery checkpoint is necessary, but the commit message and project state must identify it as incomplete, failed, experimental, or awaiting verification. Do not present such a checkpoint as a stable completed result.

When an authorized remote repository exists, push an accepted, verified commit promptly so another session or machine can recover the same state. A push is an external state change and still requires appropriate authority. Do not delay synchronization merely to combine unrelated accepted improvements into a larger batch.

Use branches or the version-control system's equivalent isolation when experimental, concurrent, or incomplete work should not change the stable shared branch. Integrate only after conflicts, combined behavior, and required verification have been addressed under the concurrent-work standard.

Do not rewrite published history, force-update a shared branch, delete remote references, or discard another contributor's commits without explicit authority and a recorded reason. Remote synchronization supplements the project's backup and recovery practices; it does not justify committing credentials, private data, or unsafe artifacts.

If version control or an authorized remote is unavailable, record that limitation in Repository Health. Continue using bounded work, project-state updates, and local recovery checkpoints supported by the environment.

### 6.4 Protocol Deployment Feedback Standard

A project using a copy or version of this protocol may collect information about how the protocol behaves in practice and provide it to the root protocol project for review. This exchange must remain loosely coupled: the deployed project operates independently, and feedback moves through a portable export rather than a required live connection, shared repository, or automatic write to the root project.

A **Protocol Deployment Feedback Bundle** is a versioned, portable collection of structured observations and optional sanitized evidence from one deployment, rehearsal, project period, milestone, or release. An internal rehearsal may use the same bundle contract when it clearly identifies that it did not provide true external isolation.

#### Authority and Independence

- A deployed agent may maintain its own project state and record protocol observations, but it must not modify the root protocol repository or publish root protocol changes unless separately authorized as a root contributor.
- A feedback observation is evidence for review, not an approved protocol requirement, root decision, or product requirement.
- The root protocol owner decides whether an observation is accepted, needs more evidence, duplicates existing work, is outside protocol scope, or justifies a bounded improvement item.
- A deployed project must not wait for a feedback response to continue ordinary authorized work unless a local blocker independently requires resolution.
- Root protocol changes do not silently update deployments. A deployment adopts a newer protocol version through its own explicit upgrade and compatibility review.

#### Collection Timing

Observations should be recorded close enough to the event that their evidence and impact remain reliable. A bundle may be exported:

- after a milestone, release, handoff test, interruption, or protocol upgrade;
- when repeated friction or a protocol-related failure becomes material;
- at an agreed periodic checkpoint;
- when the root protocol project requests evidence; or
- when the deployment owner chooses to contribute accumulated feedback.

Export is not required after every session. Use a cadence proportional to the deployment's change rate, risk, and observed protocol behavior. Critical local issues must still be recorded in project state immediately even when feedback export is deferred.

Feedback collection, bundle creation, and delivery are optional unless an approved local requirement, milestone, incident process, or explicit test makes one of them part of acceptance. A project must not remain blocked merely because optional feedback was not exported or delivered. When a test claims to validate the end-to-end feedback lifecycle, its acceptance boundary must separately cover bundle creation, delivery guidance, receipt, and adjudication rather than treating a successful local observation as proof of the complete lifecycle.

#### Participation Preference and Generation Offers

At protocol adoption or initialization, and whenever no current preference is recorded, the agent must present the project owner with a plain-language choice for protocol-feedback participation and record the authorized disposition:

- **Enabled** — proactively offer bundle generation at the recorded cadence or triggers.
- **On demand** — do not make routine proactive offers after the initial choice; generate only in response to an explicit owner request, and revisit the preference only at a recorded condition.
- **Disabled** — do not offer or prepare a bundle until the owner changes the preference; a recorded revisit condition may reopen the participation choice but does not authorize generation.

If the owner does not answer, record **Undecided**, do not generate a bundle, and set a proportional revisit trigger such as the next material milestone or handoff. The unanswered choice does not block ordinary project work and must not be repeated every session by default.

For **Enabled** participation, record the owner-selected offer cadence or triggers. These may include a milestone, release, handoff, material protocol friction or failure, periodic checkpoint, or another explicit event. Do not default the cadence to every session unless the owner chooses that frequency.

When an enabled trigger is reached, ask before preparing a bundle and present the available dispositions in plain language: **Generate now**, **Defer** to a recorded date or trigger, **Skip this trigger**, or **Change preference or cadence**. Only an affirmative **Generate now** response authorizes preparation and sealing of a bundle; silence or an unanswered offer is not authorization. The offer may accompany a normal validation or handoff update, but it must remain visible to the owner.

Record the current preference, its authority and date, cadence or triggers, the latest offer and disposition, and the next offer or revisit trigger in live project state. Keep the record proportional; a concise current-state summary is sufficient when detailed offer history has no continuing value.

Authorization to generate a bundle does not authorize delivery to the root project. Bundle generation and delivery remain separate optional owner decisions. A decline, deferral, or skipped trigger does not block normal work unless a separately approved local requirement makes that feedback action part of acceptance. Existing deployments adopt this behavior only through an explicit protocol upgrade; version 0.40 does not silently modify their files or state.

#### Required Bundle Content

Every bundle must contain one manifest or combined feedback artifact that identifies:

- a stable bundle identifier and feedback-schema version;
- the protocol version used and the deployment or rehearsal identifier;
- collection period, export trigger, export date, producer, and bundle status;
- an environment classification such as internal rehearsal, external project, or production deployment;
- the included workflow stages, work items, or milestones and relevant limitations;
- an inventory of included files or evidence;
- a redaction and sensitive-data review result; and
- any relationship to an earlier bundle it replaces or continues.

Every material observation must have a stable identifier and record:

- category, date or period, and affected protocol section, template, or workflow when known;
- the project stage or work item in which it occurred;
- expected behavior and observed behavior;
- effect on continuity, comprehension, authority, safety, verification, effort, or outcome;
- frequency or recurrence when known;
- workaround or local response used;
- evidence or a sanitized evidence reference;
- a suggested improvement when one exists, clearly labeled as a proposal; and
- confidence, limitations, and current observation status.

Useful categories include **Success**, **Friction**, **Ambiguity**, **Failure**, **Workaround**, **Missing Guidance**, and **Suggestion**. A success observation is valuable when it demonstrates that a mechanism worked under conditions the root project needs to understand.

Counts or measures may be included when they can be collected reliably, such as work items completed, handoffs attempted, recovery events, validation rounds, context expansions, or protocol exceptions. Do not manufacture measurements or treat smaller counts as proof of better quality.

#### Evidence and Data Minimization

Structured observations are the default. Raw logs, complete conversations, source code, project requirements, user content, screenshots, and environment dumps must not be included merely because they are available.

Before export:

- remove secrets, credentials, tokens, personal data, customer data, and unrelated proprietary content;
- include only the smallest evidence needed to evaluate the observation;
- summarize or redact raw logs when a structured account is sufficient;
- identify omitted or redacted information when its absence limits interpretation;
- obtain any authority required to share project evidence; and
- verify the final inventory and integrity information appropriate to the transport.

Sensitive material must not be hidden inside archives, repository history, generated output, or diagnostic attachments. If useful evidence cannot be shared safely, record the observation and limitation without the evidence rather than exporting unsafe data.

#### Export and Transport

A bundle may be transported as a folder, archive, separate repository or revision, attachment, or another durable method selected by the deployment owner. The transport must not require access to the root protocol repository.

Mark a bundle **Ready** only after its inventory, redaction review, and internal consistency have been checked. Preserve the exported bundle unchanged after transmission. Corrections or additions should create a new bundle version that links to the earlier one rather than rewriting received evidence.

When this protocol is used from its source repository, `templates/deployment-feedback/PROTOCOL_FEEDBACK_BUNDLE.template.md` provides a combined human-readable structure. Optional evidence files may accompany it under a clearly inventoried `evidence/` directory.

##### Temporary Manual Staging Convention

Until a later protocol version replaces this convention with a more mature transport mechanism, use these clearly separated manual locations:

```text
Standalone or deployed project:
feedback-export/
└── [BUNDLE-ID]/
    ├── PROTOCOL_FEEDBACK_BUNDLE.md
    ├── DELIVERY_INSTRUCTIONS.md      # generic optional-copy instruction
    ├── MANIFEST.sha256             # recommended when files are copied
    └── evidence/                   # optional, sanitized, and inventoried

Root protocol project:
feedback-inbox/
└── [BUNDLE-ID]/
    └── [unchanged copied bundle contents]
```

When the owner authorizes feedback bundle generation, the derived, standalone, or deployed project must create `feedback-export/[BUNDLE-ID]/` inside its own authorized project or sandbox, complete the bundle's Ready checks, record integrity appropriate to its files, add the generic delivery instructions below, and seal the complete directory before handoff. The project must not require or assume access to the root protocol repository. If it cannot prepare a complete safe bundle, it should retain the diagnostic locally or report that export was not performed rather than ask the user to assemble selected evidence manually.

The user or another authorized transfer operator may then copy the complete sealed bundle directory unchanged into the root project's `feedback-inbox/[BUNDLE-ID]/`. Do not merge files from different bundles, edit received content, or overwrite an existing inbox directory. A correction or addition must use a new bundle version or identifier that links to the earlier bundle.

Copying a bundle into `feedback-inbox/` means only **awaiting receipt**. It does not verify the bundle, create a receipt, triage an observation, approve an improvement, or authorize a protocol change. When review is requested, the root project verifies the inbox copy and creates a separate record under `feedback-receipts/` before triage.

##### Optional Transfer and Role Boundary

Under the temporary manual convention, `DELIVERY_INSTRUCTIONS.md` must be part of the bundle inventory and integrity boundary. It must communicate this behavior in generic terms:

> Optional protocol feedback is ready in `feedback-export/[BUNDLE-ID]/`. To deliver it, copy this entire directory unchanged to the root protocol project's `feedback-inbox/[BUNDLE-ID]/`. Do not edit the bundle, create a review workspace, run or prompt a coordinator review, or update derived-project or root-project state. If feedback is not being delivered now, no action is required.

The derived project may repeat the bundle identifier and logical source/destination in its final user-facing message, but it must not turn the transfer operator into a project coordinator. In particular, it must not instruct the operator to:

- create a machine-specific coordinator or review workspace;
- choose, combine, or rewrite individual diagnostic files;
- construct or supply a reviewer prompt;
- decide the authoritative Pass/Fail or observation disposition; or
- edit work-item, milestone, goal, overview, receipt, or other authoritative state.

The root protocol project owns receipt verification, coordinator adjudication when required, observation triage, root-state updates, and protocol-improvement decisions. A loosely coupled derived project retains authority over its own state: it may later adopt a root acknowledgment or recommendation through its normal local workflow, but neither the transfer operator nor the root silently edits it.

If a test requires reviewer independence beyond normal root receipt and adjudication, the root project or another explicitly authorized test harness must provision the review boundary and collect its output. If that capability is unavailable, record the independent review as Not run or the test as incomplete. Do not replace missing orchestration with user-created directories, manual evidence restructuring, or ad hoc prompts.

This directory convention is an intentionally temporary operational convenience. Later transport/import tooling may replace it, but existing sealed bundles and receipts must retain their original integrity and history.

#### Root-Project Receipt and Triage

On receipt, the root protocol project should:

1. assign a receipt identifier and record source, protocol version, received date, and transport limitations;
2. preserve the received bundle as immutable evidence rather than editing it into current protocol state;
3. verify inventory, integrity, redaction claims, and safe handling before wider review;
4. triage every observation with a recorded disposition and rationale;
5. create separate bounded protocol work items for accepted improvement candidates;
6. implement, verify, version, commit, and publish each accepted improvement under the normal protocol workflow; and
7. optionally provide a separate acknowledgment identifying dispositions or newer protocol versions.

When the root project adopts an inbox, its durable session-entry instructions must check that inbox for invalid, unreceipted, and untriaged bundles before unrelated default work. The check may be implemented by a script, service, cloud query, or another reliable mechanism appropriate to the transport. An unavailable optional inbox must be reported truthfully but does not automatically block unrelated root work. Presence of a bundle changes the root queue; it does not change protocol authority or the derived project's state.

Do not merge deployment logs directly into the protocol, automatically convert frequency into priority, or treat a suggested solution as authoritative merely because the observation is valid. Preserve the link from any resulting protocol decision or work item back to its feedback observation and receipt.

---

# Live Project State

> This section is initialized for the Progress Group Inc. corporate website. The governing protocol above remains reusable authority; the records below describe this project only.

## 7. Project Definition

### Identity

- **Project name:** Progress Group Inc. Corporate Website
- **One-sentence purpose:** Create a polished, dynamic, responsive informational website that presents Progress Group Inc. and its consulting services credibly.
- **Lifecycle stage:** Implementation
- **Protocol adopted:** 2026-07-19
- **Protocol version:** 0.41
- **Last updated:** 2026-10-23
- **Updated by:** Codex continuation session

### Requirements and Key References

| ID | Artifact | Location | Authority / Purpose |
|---|---|---|---|
| `REF-PGI-001` | Preserved source request | `requirements-source/SOURCE-001.md` | Authoritative project intent and candidate company information |
| `REF-PGI-002` | Requirements baseline | `requirements/REQUIREMENTS.md` 1.0 | Approved project scope with release-validation controls |
| `REF-PGI-003` | Stakeholder overview | `PROJECT_OVERVIEW.md` | Derived plain-language project summary |
| `REF-PGI-004` | Technology Selection Brief | `TECHNOLOGY_SELECTION.md` | Recorded Profile A authority, consequences, and supported foundation versions |
| `REF-PGI-005` | Proposed website content | `CONTENT_DRAFT.md` | Substantial draft copy; candidate facts and claims require recorded validation |
| `REF-PGI-006` | Brand guide and assets | `BRAND_GUIDE.md`, `assets/ASSET_MANIFEST.md` | Original visual identity and implementation guidance |

### Requirements Intake Status

- **Source input:** `SRC-PGI-001` at `requirements-source/SOURCE-001.md`
- **Intake status:** Baseline approved with release-validation controls
- **Requirements Intake Brief:** Embedded in `requirements/REQUIREMENTS.md`
- **Normalized baseline:** `REQ-PGI-001` version 1.0
- **Approval authority:** Project owner through `SRC-PGI-001`
- **Validation source events:** `SRC-PGI-001`
- **Last validation:** 2026-07-19 — approved project outcome and supplied service categories; public facts remain controlled
- **Baseline transition check:** 2026-07-19 — Passed for planning and technology selection
- **Open intake controls:** `CTRL-PGI-001` through `CTRL-PGI-007` before public release

### Protocol Feedback Preference

- **Participation:** Enabled
- **Authority / date:** Project owner, 2026-07-20 — explicit instruction that "feedback-export should be enabled"
- **Offer cadence / triggers:** Pending owner selection; enablement does not establish a generation trigger
- **Latest generation offer:** 2026-07-20 — owner explicitly requested creation after the protocol choices were presented; disposition **Generate now**
- **Next offer / revisit trigger:** Owner selection of an offer cadence or explicit triggers
- **Latest bundle:** `PFB-PGI-20260720-001` — Ready locally; delivery is not authorized

### Goals

| ID | Goal | Success Measure | Status |
|---|---|---|---|
| `GOAL-PGI-001` | Present Progress Group Inc. through a polished professional website. | Responsive public experience clearly communicates company category, services, approach, and contact path. | Approved |
| `GOAL-PGI-002` | Make limited source information feel substantial without fabrication. | Service detail, business questions, process content, and original visuals provide depth while unsupported proof claims remain absent. | Approved |
| `GOAL-PGI-003` | Leave the project easy to extend and hand off. | Centralized content, bounded work, verification evidence, current state, and Git history support fresh-session continuation. | Approved |

### Scope

**In scope**

- Responsive informational/presentation website.
- Home/About/Services/Approach/Contact visitor journey.
- Original logo, favicon, palette, and abstract consulting illustrations.
- Restrained interactive motion and responsive navigation.
- Search/social foundations after domain and facts are approved.
- Maintainable centralized public content.

**Out of scope or deferred**

- Authentication, portal features, CMS, blog, scheduling, newsletter, and live chat.
- Contact form, analytics, cookies, or stored visitor data without separate data/privacy authority.
- Unsupported clients, testimonials, case studies, certifications, industries, awards, or quantified outcomes.
- Publication of revenue and employee estimates without explicit current verification and approval.
- Hosted deployment and production domain; Cloudflare preparation authorized separately on 2026-10-23.

### Constraints

- Do not scaffold or install dependencies before `PGI-TECH-001` has owner authority.
- Do not present supplied directory estimates as verified company statements.
- Keep core content accessible and useful without JavaScript or motion.
- Prefer small, justified dependencies over a broad UI framework.
- Preserve original SVG sources and keep meaningful copy in HTML rather than illustrations.
- Existing deployments do not silently inherit future root-protocol versions.

---

## 8. Current State

### Executive Summary

The Profile A website foundation is implemented and verified. Astro 7.1.1 builds one static, responsive home presentation using centralized TypeScript content, project-local design tokens, the original SVG assets, semantic landmarks, visible keyboard focus, reduced-motion handling, and no required client JavaScript. Controlled contact/business facts remain intentionally absent; Cloudflare static hosting configuration is present; no hosted deployment or public release exists.

### Implemented Capabilities

| Capability | Requirement | State | Evidence / Location |
|---|---|---|---|
| Protocol-driven continuation | `GOAL-PGI-003` | Working | `AGENTS.md`, this file, `README.md` |
| Requirements and public-claim controls | `REQ-PGI-001` | Working | `requirements/REQUIREMENTS.md` |
| Substantial website content draft | `FR-PGI-001`–`FR-PGI-005` | Drafted; release validation open | `CONTENT_DRAFT.md` |
| Original visual identity | `FR-PGI-006` | Initial assets complete; owner may revise | `BRAND_GUIDE.md`, `assets/` |
| Web application | `FR-PGI-001`, `FR-PGI-006`–`FR-PGI-008` | Foundation working; content remains a non-public draft | `src/`, `package.json`, successful production build and render checks |

### Current Technical Shape

- **Major components:** Astro static application, centralized `src/data/site.ts` content, reusable layout/header/footer, project-local CSS tokens and responsive presentation, original assets imported from `assets/`.
- **Primary execution paths:** One static home page with About, Services, Approach, and Contact sections; anchor navigation and skip link work without JavaScript.
- **Persistence / external systems:** None.
- **Build and run:** Node.js 24.18.0 LTS, npm 11.16.0, Astro 7.1.1, `@astrojs/check` 0.9.9, and TypeScript 6.0.3 are pinned; `npm run dev`, `npm run check`, `npm run build`, and `npm run preview` are defined. The current machine uses an ignored project-local Node.js runtime because no system runtime was present.
- **Test and verification:** `npm run build` includes Astro diagnostics; preview, built anchors/assets, controlled-content exclusion, desktop rendering, exact 390px mobile layout, overflow, and first keyboard focus have been checked.
- **Deployment / delivery:** Cloudflare Pages configuration in `wrangler.jsonc`; optional Workers static assets in `wrangler.workers.jsonc`. GitHub connection is reported by the owner; the initial Pages install failed. Fixes are local; successful hosted deployment remains unverified.

### Repository Health

- **Last implementation revision:** `9d547b2` — verified Profile A foundation checkpoint
- **Working tree:** Pages install/configuration fixes pending checkpoint; ignored `.vs/` and `.wrangler/` plus `.tools/`, `node_modules/`, `dist/`, and `feedback-export/` remain local
- **Remote synchronization:** Owner authorized GitHub push on 2026-10-23; Remote `origin` is configured as `https://github.com/alvocor/ProgressGroupINC.git`; GitHub CLI is absent and this session cannot connect to github.com:443. Owner subsequently reports the project was pushed and connected to Pages; latest fixes remain local.
- **Last verification:** 2026-07-20 — pinned dependency/audit inspection, Astro diagnostics and production build, preview HTTP/content/assets/anchors, controlled-fact exclusion, desktop/mobile browser rendering, exact mobile overflow metrics, first keyboard focus, feedback-bundle inventory/integrity/redaction review, and Git whitespace checks Passed
- **Known failing checks:** None; initial runtime/install and sandbox-spawn failures were resolved and are preserved in the Development Log

---

## 9. Development Plan

### Active Change Requests

| ID | Requested Outcome | Classification | Source / Authority | Baseline Effect | Status | Next Action |
|---|---|---|---|---|---|---|
| `CR-PGI-001` | Push project to GitHub and make it deployable to Cloudflare | Operational / compatibility | Owner, 2026-10-23: "push project inside this folder to github. Make sure it is deployable to cloudflare" | No product baseline change; selects hosting preparation under existing maintainability/security requirements | In Progress | Verify build/configuration, create local checkpoint, push when repository/access is available |

### Milestones

| ID | Outcome | Completion Criteria | Status |
|---|---|---|---|
| `MS-PGI-000` | Project initialization | Protocol/state, requirements, technology decision brief, content, original assets, verification, and local Git checkpoint are present. | Complete |
| `MS-PGI-001` | Website foundation and visual system | Selected stack builds; global shell, tokens, responsive navigation, logo, asset pipeline, and representative page structure pass targeted checks. | Complete |
| `MS-PGI-002` | Complete public presentation | Approved content, services, approach, contact experience, and restrained interactions work responsively and accessibly. | Planned |
| `MS-PGI-003` | Release-ready website | Public facts, domain, metadata, accessibility, performance, links, build, deployment, and residual risks receive recorded verification/disposition. | Planned |

### Active Work

`PGI-DEPLOY-FIX-001` / `CR-PGI-002` (Codex, 2026-10-23): Verification. Owner requested review and fixes for the Cloudflare Pages log showing ESTRICTALLOWSCRIPTS for fsevents@2.3.3. Operational/conformance correction; no product baseline change. Scope: explicit denial of the optional macOS script, default Pages output configuration, separate optional Workers configuration, and operating guidance. Acceptance: all lockfile install scripts have explicit policy, configuration targets dist, install/build succeeds. Rollback: revert these configuration/documentation changes; no data migration. Git status was clean at 092340c before changes. Owner reports GitHub push and Cloudflare connection completed, superseding the previous connection blocker. Full installation/build remains unverified because registry access is restricted.

`PGI-DEPLOY-001` (Codex, 2026-10-23): Blocked for GitHub synchronization; Cloudflare preparation verified under `CR-PGI-001`. Scope: Cloudflare static deployment configuration, build instructions, local exclusions, documentation reconciliation, and GitHub synchronization. Acceptance: production build passes, configuration points to its output, local/secrets/build artifacts remain excluded, and GitHub branch matches the local checkpoint. Verify with pinned-runtime build, configuration/output inspection, Git diff checks, and remote revision comparison. No content, data migration, or application dependencies change; rollback is a normal revert. Initial repository discrepancy: untracked `.vs/` editor data; excluded without deleting it. Existing content approval work remains independent.

| ID | Requirement / Milestone | Outcome | Acceptance Criteria | Verification | Status | Owner |
|---|---|---|---|---|---|---|
| `PGI-SETUP-001` | `MS-PGI-000` | Establish a restartable protocol project with original brand assets. | Required files and assets exist, references resolve, SVGs parse, project state is current, and a local Git checkpoint is clean. | Filesystem, content, XML/SVG, browser-render visual inspection, and Git checks Passed. | Complete | Setup agent |
| `PGI-TECH-001` | `REQ-PGI-001`, `MS-PGI-001` | Select the web technology profile. | Owner chooses A/B/C or delegates within recorded constraints; selected profile and consequences are recorded before scaffolding. | Owner authority, brief/state reconciliation, and current official version evidence inspected. | Complete | Project owner |
| `PGI-BUILD-001` | `FR-PGI-001`, `FR-PGI-006`–`FR-PGI-008`, `QR-PGI-001`–`QR-PGI-003`, `MS-PGI-001` | Establish the Astro foundation and implement the first representative responsive home shell. | Pin the selected toolchain; preserve existing project docs/assets; centralize public content; implement semantic landmarks, project-local tokens, responsive navigation, the supplied logo/hero asset, representative introduction/services/contact paths, visible focus, reduced-motion handling, and useful no-JavaScript content without unverified claims or deferred data features. | Astro diagnostics/build, preview, anchors/assets, content controls, desktop/mobile visual and overflow, first keyboard focus, and Git checks Passed. | Complete | Codex continuation session |
| `PGI-CONTENT-001` | `FR-PGI-003`–`FR-PGI-005`, `CTRL-PGI-001`–`CTRL-PGI-007`, `MS-PGI-002` | Obtain owner dispositions for controlled public facts, contact details, and proposed marketing copy. | Owner approves, revises, rejects, or defers each unambiguously grouped control; affected content authority, centralized site data, questions, and release controls are reconciled without publishing unsupported facts. | Inspect owner authority and grouped dispositions; run targeted content/control search and application checks after approved updates. | Ready | Project owner |

### Next Actions

0. **`PGI-DEPLOY-001` — Complete Cloudflare preparation and GitHub synchronization.** Verify the build, checkpoint changes, enable GitHub network access, push `main` to `origin`, and compare remote HEAD. Cloudflare account connection and public deployment are not claimed by configuration alone.

Actions are ordered by priority. The first unblocked Ready item is the default continuation point.

1. **`PGI-CONTENT-001` — Validate public facts and proposed marketing copy before release.**  
   Prerequisites: None for design drafts; controls must close before public release.  
   First step: Present the owner grouped plain-language dispositions for `CTRL-PGI-001` through `CTRL-PGI-007`, then apply only the authorized facts and copy.

### Recently Completed

| ID | Outcome | Completed | Verification | Related Changes |
|---|---|---|---|---|
| `PGI-REQ-001` | Preserved source and approved normalized baseline 1.0 with release controls. | 2026-07-19 | Baseline transition review recorded in requirements. | `requirements-source/`, `requirements/` |
| `PGI-BRAND-001` | Created initial original logo, favicon, palette, and three abstract website illustrations. | 2026-07-19 | Six SVGs parsed as XML and rendered correctly in a local headless browser; visual inspection Passed. | `BRAND_GUIDE.md`, `assets/` |
| `PGI-TECH-001` | Selected Profile A: Astro and TypeScript using a current Node.js LTS runtime. | 2026-07-20 | Owner authority, rejected alternatives, consequences, official support guidance, and exact initial versions reconciled. | `TECHNOLOGY_SELECTION.md`, `DEC-PGI-006` |
| `PGI-BUILD-001` | Implemented the pinned static Astro foundation and representative responsive home presentation. | 2026-07-20 | Diagnostics/build, HTTP, anchors/assets, content controls, desktop/mobile rendering, 390px overflow, keyboard focus, and Git checks Passed. | `src/`, `package.json`, `package-lock.json`, `DEC-PGI-007` |

---

## 10. Decisions and Control Items

### Decisions

`DEC-PGI-009` — Owner selected Cloudflare and authorized GitHub synchronization on 2026-10-23 (`CR-PGI-001`). Preserve static Astro output; use Workers assets configuration with Pages as an alternative. No adapter or server dependency is needed. Domain and controlled public copy remain unapproved.

| ID | Decision | Authority | Date | Consequence |
|---|---|---|---|---|
| `DEC-PGI-001` | Adopt protocol 0.41 for the standalone website project. | Project owner request to use the protocol | 2026-07-19 | Sessions begin from durable project state rather than conversation history. |
| `DEC-PGI-002` | Use Compact Intake Artifact Mode for the single-source initial baseline. | Setup agent within protocol bounds | 2026-07-19 | Source remains separate; normalized baseline and controls stay in one requirements artifact. |
| `DEC-PGI-003` | Use a vector-first original brand system. | Setup agent under explicit brand-asset authority | 2026-07-19 | Logos and abstract illustrations are editable, lightweight, scalable, and animation-ready. |
| `DEC-PGI-004` | Defer application scaffolding until technology authority is recorded. | Protocol technology-selection rule | 2026-07-19 | `PGI-TECH-001` is first Ready; `PGI-BUILD-001` remains Blocked. |
| `DEC-PGI-005` | Enable protocol-feedback participation. | Project owner instruction | 2026-07-20 | Proactive generation offers may occur only at owner-selected triggers, and each reached trigger still requires an affirmative **Generate now** response before a bundle or export directory is created. |
| `DEC-PGI-006` | Select Profile A: static Astro 7.1.1 with TypeScript on Node.js 24.18.0 LTS and npm 11.16.0. | Project owner response | 2026-07-20 | Use content-first rendering, project-local CSS/tokens, and focused framework-free interaction; Profiles B/C, broad UI kits, server rendering, CMS, and hosting adapters remain unselected for version one. |
| `DEC-PGI-007` | Manually establish the minimal Astro files inside the authoritative existing repository and allow only pinned `esbuild@0.28.1` install scripts. | Codex continuation session within Profile A authority | 2026-07-20 | Existing documentation/assets remain in place; no nested scaffold, React, Tailwind, UI kit, adapter, or CMS is added; npm's strict script policy rejects future unreviewed package scripts. |
| `DEC-PGI-008` | Generate protocol feedback bundle `PFB-PGI-20260720-001`. | Project owner explicit creation request, treated as **Generate now** | 2026-07-20 | A complete sealed bundle may exist under ignored `feedback-export/`; generation does not authorize delivery, and routine offer cadence remains open under `Q-PGI-005`. |

### Assumptions

| ID | Assumption | Impact if Wrong | Validation | Status |
|---|---|---|---|---|
| `ASM-PGI-001` | A content-first public presentation is the correct first release. | Stack/site architecture may need broader application capability. | Owner selected content-first Profile A. | Validated 2026-07-20 |
| `ASM-PGI-002` | Restrained motion and abstract brand graphics fit the desired professional tone. | Visual system may require redesign. | Owner review during first representative page. | Proposed |
| `ASM-PGI-003` | Telephone and physical location can be the initial contact path. | Contact experience needs approved email/form/scheduling. | Public-fact and contact decision. | Proposed |

### Questions

| ID | Question | Authority | Impact | Status |
|---|---|---|---|---|
| `Q-PGI-001` | Which technology profile is authorized? | Project owner | Profile A selected; no longer blocks scaffolding or installation. | Resolved 2026-07-20 |
| `Q-PGI-002` | Which supplied facts and contact details are current and approved for publication? | Project owner/company representative | Blocks public release of those facts. | Open |
| `Q-PGI-003` | Is the proposed tagline and engagement framework approved, revised, or rejected? | Project owner | Affects final copy and visual emphasis. | Open |
| `Q-PGI-004` | What production domain, hosting provider, and deployment authority apply? | Project owner | Blocks production metadata and release. | Open |
| `Q-PGI-005` | What offer cadence or triggers apply to Enabled protocol-feedback participation? | Project owner | Required before proactive generation offers can be scheduled; does not block ordinary work. | Open |

### Risks

| ID | Risk | Likelihood | Impact | Mitigation | Status |
|---|---|---|---|---|---|
| `RISK-PGI-001` | Third-party directory facts may be stale or unsuitable for marketing. | Medium | High credibility/privacy impact | Keep controls open and verify with owner before release. | Open |
| `RISK-PGI-002` | Limited proof material could tempt invented claims or generic filler. | Medium | High credibility impact | Use explanatory content and visuals; prohibit unsupported proof claims. | Controlled |
| `RISK-PGI-003` | Premature dependency or framework choices could add unnecessary complexity. | Medium | Medium maintainability impact | Keep selection gate and justify each dependency. | Controlled |
| `RISK-PGI-004` | A future contact form or analytics could introduce unplanned data/privacy obligations. | Medium | Medium/High | Defer until separately authorized and designed. | Open |

### Blockers

- Public release of controlled facts is blocked until the applicable owner confirmations are recorded.

---

## 11. Verification, Log, and Handoff

### Verification Evidence

| Date | Work Item | Check | Result | Evidence / Limitation |
|---|---|---|---|---|
| 2026-07-19 | `PGI-REQ-001` | Source preservation and baseline traceability review | Passed | Source, requirements, overview, content, and controls are linked. |
| 2026-07-19 | `PGI-BRAND-001` | Parse all six SVGs and render four representative assets in a local headless browser | Passed | Horizontal logo, hero, operations, and advisory-path previews were visually inspected; temporary PNG previews were removed. |
| 2026-07-19 | `PGI-SETUP-001` | Compare governing protocol to root; verify 19 project files, links, content controls, XML, exclusions, staged whitespace, and local Git checkpoint | Passed | Governing lines match root through the live-state boundary; no application scaffold, feedback export, or temporary preview remains; initial commit `c966cdc`. |
| 2026-07-20 | `DEC-PGI-005` | Reconcile the owner's explicit feedback preference with protocol 0.41 and affected current-state records | Passed | Participation is Enabled; cadence remains an open owner choice; no generation authorization, bundle, or `feedback-export/` directory exists. |
| 2026-07-20 | `PGI-TECH-001` | Inspect owner authority, profile consequences, local tool availability, current Astro/Node support guidance, and exact package metadata | Passed | Profile A selected; Node.js 24.18.0 LTS/npm 11.16.0, Astro 7.1.1, `@astrojs/check` 0.9.9, and TypeScript 6.0.3 recorded. Local `node` and `npm` commands were absent before installation. |
| 2026-07-20 | `PGI-BUILD-001` | Install and inspect pinned dependency tree | Passed | 273 packages audited with zero reported vulnerabilities; exact direct versions match the brief; no unreviewed install scripts remain; only pinned `esbuild@0.28.1` is allowed under strict npm script policy. |
| 2026-07-20 | `PGI-BUILD-001` | `npm run build` with Astro telemetry disabled in the restricted verification environment | Passed | Diagnostics covered 7 Astro/TypeScript files with 0 errors, 0 warnings, and 0 hints; one static route built successfully. |
| 2026-07-20 | `PGI-BUILD-001` | Preview HTTP, built anchors/assets, controlled-fact exclusion, desktop/mobile rendering, overflow, and keyboard inspection | Passed | HTTP 200; main/hero present; 10 fragment links and 2 directly referenced built assets resolved; controlled address/phone/revenue/employee/leadership strings absent from `src/`; desktop and emulated 390px mobile visuals inspected; mobile client/scroll width both 390; first Tab focused the visible skip link. Temporary previews/profiles were removed. |
| 2026-07-20 | `DEC-PGI-008` | Validate feedback bundle inventory, required delivery boundary, SHA-256 manifest, structured-observation fields, redaction scope, and local-only disposition | Passed | `PFB-PGI-20260720-001` contains exactly the combined artifact, delivery instructions, and integrity manifest; both recorded hashes match; no empty evidence directory or sensitive/raw project material is included; status is Ready and no delivery was performed. |

### Development Log

2026-10-23: Owner explicitly authorized pushing the Cloudflare fixes. Confirmed current branch master tracks origin/master and origin/HEAD points to master; corrected README production-branch settings accordingly. Preparing a local checkpoint and normal push; full production build remains unverified due to the previously recorded registry restriction.

2026-10-23 (`CR-PGI-002`): Added pinned fsevents@2.3.3 denial while preserving strict script enforcement and esbuild approval. Changed wrangler.jsonc to Pages pages_build_output_dir=./dist; preserved Workers assets in wrangler.workers.jsonc with explicit --config instructions. Node 24.18.0/npm 11.16.0 dependency-install dry run Passed; lockfile policy/configuration inspection and Git whitespace checks Passed. Full npm ci failed first with ENOTCACHED offline, then EACCES fetching registry tarballs; copying available owner-cache tarballs into the ignored project cache did not supply every dependency. npm ci cleared/rebuilt only part of local node_modules; restore with npm ci in a network-enabled environment before development. Production build Not run this session. No lockfile/dependency versions changed, no push or hosted deployment performed. User log proves GitHub cloning works in Cloudflare; initial build failed before Astro. Next: commit/push fixes and deploy the updated commit with README Pages settings, then verify hosted output.

2026-10-23 recovery checkpoint (`CR-PGI-001`): inspected clean tracked foundation at `74f637c`; `.vs/` was the only untracked directory. Added `.vs/` and `.wrangler/` exclusions, Workers static-assets configuration, and deployment guidance. Production build verification Passed with the existing local Node.js 24.18.0/npm 11.16.0 runtime: 7 files checked, 0 errors/warnings/hints, one static route generated in dist/. Remote verification and hosted deployment are Not run. Remote `origin` is set to `https://github.com/alvocor/ProgressGroupINC.git`. `git push -u origin main` failed before authentication because this session cannot connect to github.com:443. A request for elevated network access was rejected by the workspace approval policy. No credentials were printed and no hosted deployment was performed. Git commands use a per-command safe.directory override because this sandbox account differs from the directory owner; global Git trust was not changed.

| Date | Entry |
|---|---|
| 2026-07-20 | Generated and sealed `PFB-PGI-20260720-001` from the owner's explicit creation request. The bundle contains four structured protocol observations, generic delivery instructions, and a SHA-256 manifest. Redaction, inventory, integrity, and delivery-boundary checks Passed. The ignored local export is Ready; it was not delivered, and `Q-PGI-005` remains open because this one-time authorization did not select a proactive offer cadence. |
| 2026-07-20 | Completed `PGI-BUILD-001` and `MS-PGI-001`. Added a minimal static Astro application with exact dependencies, strict install-script approval, centralized draft content, reusable layout/header/footer, responsive project-local styling, original SVG imports, and a substantial Home/About/Services/Approach/Contact presentation. Initial machine-level Node installation stalled without writing files; the verified orphaned `winget` process was stopped, a project-local official Node.js runtime was used, and later PATH/telemetry/esbuild sandbox failures were resolved before final checks. Final diagnostics, production build, HTTP/content/asset/anchor checks, controlled-fact exclusion, desktop/mobile visual inspection, exact mobile overflow measurement, keyboard-focus inspection, and Git whitespace checks Passed. |
| 2026-07-20 | Completed `PGI-TECH-001` from the owner's explicit Profile A selection and recorded `DEC-PGI-006`. Current official guidance and package metadata support Astro 7.1.1 on Node.js 24.18.0 LTS with npm 11.16.0; the initial diagnostics pair is `@astrojs/check` 0.9.9 with TypeScript 6.0.3. Profiles B/C and unneeded framework/integration dependencies remain unselected. `PGI-BUILD-001` is now In Progress with exact acceptance and verification boundaries; the environment initially had no Node.js/npm installation. |
| 2026-07-20 | Recorded the owner's explicit Enabled protocol-feedback preference as `DEC-PGI-005`. This process configuration has no requirements-baseline or application effect. Offer cadence/triggers remain open under `Q-PGI-005`; protocol 0.41 still requires a visible generation offer and affirmative **Generate now** response at a reached trigger before creating a bundle or `feedback-export/` directory. `PGI-TECH-001` remains the first unblocked Ready item. |
| 2026-07-19 | Completed `PGI-SETUP-001` and `MS-PGI-000`. The standalone protocol 0.41 governing copy matches the root through the live-state boundary; 19 project files, internal links, content controls, and six original SVG assets passed structural checks, and four representative assets passed browser-render visual inspection. Initial local commit `c966cdc` preserves requirements, content, brand, and routing. Application scaffolding and installation remain intentionally unstarted pending `PGI-TECH-001`; no remote is configured. |

### Handoff

Current priority (`CR-PGI-002`): review and commit/push local Pages fixes, restore dependencies with npm ci where registry access is available, run npm run build, and deploy the updated branch. The old commit retry retains the failing policy. See README Pages settings. Earlier network-blocker and Workers-default notes below describe the prior recovery checkpoint.

Read `AGENTS.md`, this file, `requirements/REQUIREMENTS.md`, `TECHNOLOGY_SELECTION.md`, `CONTENT_DRAFT.md`, and the brand/asset guidance. Cloudflare preparation is verified (2026-10-23 production build); see README.md and wrangler.jsonc. Finish PGI-DEPLOY-001 by enabling outbound GitHub access, pushing the local main checkpoint to configured origin, and comparing remote HEAD. Push was attempted and blocked by the workspace network policy; no hosted deployment was performed. `PGI-CONTENT-001` is the first unblocked Ready item: obtain grouped owner dispositions for `CTRL-PGI-001` through `CTRL-PGI-007`, then update centralized site content without publishing unsupported facts. The current machine's ignored `.tools/` contains the Node.js 24.18.0 runtime; fresh environments must provide the recorded runtime before `npm install`. Protocol-feedback participation is Enabled and `PFB-PGI-20260720-001` is sealed and Ready under ignored `feedback-export/`, but it has not been delivered; cadence/triggers remain an owner choice under `Q-PGI-005`.
