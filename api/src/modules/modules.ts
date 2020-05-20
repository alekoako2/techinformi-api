import { QrjJournalModule } from './qrj-journal'
import { LanguageModule } from './language'
import { OecdModule } from './oecd'
import { UserModule } from './user'
import { QrjPublicationModule } from './qrj-publications'
import { TechnologyTransferAndInnovationOrganizationModule } from './TechnologyTransferCenters/TechnologyTransferAndInnovationOrganizationModule'
import { TechnologyTransferNetworkModule } from './TechnologyTransferCenters/TechnologyTransferNetworkModule'
import { ResearchProjectModule } from './ResearchProjectModule'
import { EmployeeModule } from './EmployeeModule'
import { ExpertModule } from './experts/experts.module'
import { NewsModule } from './NewsModule'
import { QrjModule } from './QrjModule'

export const modules = [
  QrjJournalModule,
  QrjPublicationModule,
  LanguageModule,
  UserModule,
  OecdModule,
  TechnologyTransferAndInnovationOrganizationModule,
  TechnologyTransferNetworkModule,
  ResearchProjectModule,
  EmployeeModule,
  ExpertModule,
  NewsModule,
  QrjModule,
]
