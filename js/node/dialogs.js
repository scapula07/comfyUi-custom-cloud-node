import { ComfyCloudDialog } from '../comfy/ui.js';
import van from '../lib/van.js';

import { RemainingCredits } from '../ui/credits.js';
import { Login } from './auth/login.js';
import { Register } from './auth/register.js';
import { WorkflowRunsTable } from '../ui/table.js';
import { RunDetails } from '../ui/runDetails.js';


const Workflow = (dialogInstance) => {
  const activeTab = van.state(0)
  const runId = van.state(null)

  return () => van.tags.div({style: "color:white;width:720px;height:540px;"},
    activeTab.val == 0 ? WorkflowRunsTable(activeTab, runId) : RunDetails(activeTab, runId, dialogInstance.poll, dialogInstance)
  )
}

const Auth = (dialogInstance) => {
  const activeTab = van.state(1)

  return () => van.tags.div(
    activeTab.val == 0 ? Login(dialogInstance, activeTab) : Register(dialogInstance, activeTab)
  )
}


export const workflowTableDialog = new ComfyCloudDialog(Workflow)

export const paymentTableDialog = new ComfyCloudDialog(RemainingCredits)

export const authDialog = new ComfyCloudDialog(Auth)
