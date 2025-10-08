import { biAnalystContent } from './bi-analyst'
import { dataAnalystContent } from './data-analyst'
import { dataEngineerContent } from './data-engineer'
import { dataScientistContent } from './data-scientist'
import { mlEngineerContent } from './ml-engineer'
import { aiEngineerContent } from './ai-engineer'
import { uiUxDesignerContent } from './ui-ux-designer'
import { backendEngineerContent } from './backend-engineer'
import type { RoleContent } from './types'
import type { RoleSlug } from '../../config/routes'

export const allRoles: RoleContent[] = [
  biAnalystContent,
  dataAnalystContent,
  dataEngineerContent,
  dataScientistContent,
  mlEngineerContent,
  aiEngineerContent,
  uiUxDesignerContent,
  backendEngineerContent,
]

export const getRoleBySlug = (slug: RoleSlug): RoleContent | undefined => {
  return allRoles.find(role => role.slug === slug)
}

export * from './types'
export {
  biAnalystContent,
  dataAnalystContent,
  dataEngineerContent,
  dataScientistContent,
  mlEngineerContent,
  aiEngineerContent,
  uiUxDesignerContent,
  backendEngineerContent,
}

