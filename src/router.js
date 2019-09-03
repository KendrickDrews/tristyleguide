import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/DMID',
      name: 'DMID',
      component: () => import('./pages/DMID/DMID.vue'),
      children: [
        {
          path: 'Home',
          name: 'DMIDHome',
          component: () => import('./pages/DMID/DMIDHome.vue')
        },
        {
          path: 'SARF/:id',
          component: () => import('./pages/DMID/SARF/SARFHome.vue'),
          children: [
            {
              path: '',
              name: 'userRequest',
              component: () => import('./pages/DMID/SARF/userRequest.vue')
            },
            {
              path: 'userRequestList',
              name: 'userRequestList',
              component: () => import('./pages/DMID/SARF/userRequestList.vue')
            }
          ]
        },
        {
          path: 'CRS/:id',
          component: () => import('./pages/DMID/CRS/CRSHome.vue'),
          children: [
            {
              path: '',
              name: 'CRS',
              component: () => import('./pages/DMID/CRS/ClinicalResearchHome.vue')
            },
            {
              path: 'ClinicalMonitoring',
              name: 'ClinicalMonitoring',
              component: () => import('./pages/DMID/CRS/ClinicalMonitoring.vue')
            },
            {
              path: 'ClinicalQualityManagement',
              name: 'ClinicalQualityManagement',
              component: () => import('./pages/DMID/CRS/ClinicalQualityManagement.vue')
            },
            {
              path: 'EssentialRegulatoryDocuments',
              name: 'EssentialRegulatoryDocuments',
              component: () => import('./pages/DMID/CRS/EssentialRegulatoryDocuments.vue')
            },
            {
              path: 'HumanSubjectsProtection',
              name: 'HumanSubjectsProtection',
              component: () => import('./pages/DMID/CRS/HumanSubjectsProtection.vue')
            },
            {
              path: 'MedicalWriting',
              name: 'MedicalWriting',
              component: () => import('./pages/DMID/CRS/MedicalWriting.vue')
            },
            {
              path: 'ProtocolDevelopment',
              name: 'ProtocolDevelopment',
              component: () => import('./pages/DMID/CRS/ProtocolDevelopment.vue')
            },
            {
              path: 'ProtocolDeviationReporting',
              name: 'ProtocolDeviationReporting',
              component: () => import('./pages/DMID/CRS/ProtocolDeviationReporting.vue')
            },
            {
              path: 'SAEReporting',
              name: 'SAEReporting',
              component: () => import('./pages/DMID/CRS/SAEReporting.vue')
            },
            {
              path: 'SafetyOversightCommittee',
              name: 'SafetyOversightCommittee',
              component: () => import('./pages/DMID/CRS/SafetyOversightCommittee.vue')
            },
            {
              path: 'StudyProductInformation',
              name: 'StudyProductInformation',
              component: () => import('./pages/DMID/CRS/StudyProductInformation.vue')
            },
            {
              path: 'TeleconferenceSupport',
              name: 'TeleconferenceSupport',
              component: () => import('./pages/DMID/CRS/TeleconferenceSupport.vue')
            }
          ]
        },
        {
          path: 'Training/:id',
          component: () => import('./pages/DMID/Training/trainingHome.vue'),
          children: [
            {
              path: '',
              name: 'Training',
              component: () => import('./pages/DMID/Training/training.vue')
            },
            {
              path: 'AdHocTrainingRegistration',
              name: 'AdHocTrainingRegistration',
              component: () => import('./pages/DMID/Training/AdHocTrainingRegistration.vue')
            }
          ]
        },
        {
          path: 'ServiceRequests/:id',
          component: () => import('./pages/DMID/SR/SRHome.vue'),
          children: [
            {
              path: '',
              name: 'ServiceRequests',
              component: () => import('./pages/DMID/SR/ServiceRequestsHome.vue')
            },
            {
              path: 'ClinicalMonitoring',
              name: 'SRClinicalMonitoring',
              component: () => import('./pages/DMID/SR/ClinicalMonitoring.vue')
            },
            {
              path: 'ClinicalMonitoringReport',
              name: 'ClinicalMonitoringReport',
              component: () => import('./pages/DMID/SR/ClinicalMonitoringReport.vue')
            },
            {
              path: 'ClinicalQualityManagementServices',
              name: 'ClinicalQualityManagementServices',
              component: () => import('./pages/DMID/SR/ClinicalQualityManagementServices.vue')
            },
            {
              path: 'ClinicalQualityManagementServicesReport',
              name: 'ClinicalQualityManagementServicesReport',
              component: () => import('./pages/DMID/SR/ClinicalQualityManagementServicesReport.vue')
            },
            {
              path: 'CROMSQualityCrosswalkReview',
              name: 'CROMSQualityCrosswalkReview',
              component: () => import('./pages/DMID/SR/CROMSQualityCrosswalkReview.vue')
            },
            {
              path: 'CROMSQualityCrosswalkReviewReport',
              name: 'CROMSQualityCrosswalkReviewReport',
              component: () => import('./pages/DMID/SR/CROMSQualityCrosswalkReviewReport.vue')
            },
            {
              path: 'DSMB-SMCCoordination',
              name: 'DSMB-SMCCoordination',
              component: () => import('./pages/DMID/SR/DSMB-SMCCoordination.vue')
            },
            {
              path: 'DSMB-SMCCoordinationReport',
              name: 'DSMB-SMCCoordinationReport',
              component: () => import('./pages/DMID/SR/DSMB-SMCCoordinationReport.vue')
            },
            {
              path: 'EssentialRegulatoryDocuments',
              name: 'SREssentialRegulatoryDocuments',
              component: () => import('./pages/DMID/SR/EssentialRegulatoryDocuments.vue')
            },
            {
              path: 'EssentialRegulatoryDocumentsReport',
              name: 'EssentialRegulatoryDocumentsReport',
              component: () => import('./pages/DMID/SR/EssentialRegulatoryDocumentsReport.vue')
            },
            // {
            //   path: 'HumanSubjectsProtection',
            //   name: 'HumanSubjectsProtection',
            //   component: () => import('./pages/DMID/SR/HumanSubjectsProtection.vue')
            // },
            {
              path: 'MedicalWriting',
              name: 'SRMedicalWriting',
              component: () => import('./pages/DMID/SR/MedicalWriting.vue')
            },
            {
              path: 'MedicalWritingReport',
              name: 'MedicalWritingReport',
              component: () => import('./pages/DMID/SR/MedicalWritingReport.vue')
            },
            {
              path: 'MiscellaneousServices',
              name: 'MiscellaneousServices',
              component: () => import('./pages/DMID/SR/MiscellaneousServices.vue')
            },
            {
              path: 'MiscellaneousServicesReport',
              name: 'MiscellaneousServicesReport',
              component: () => import('./pages/DMID/SR/MiscellaneousServicesReport.vue')
            },
            {
              path: 'ProtocolDeviationReport',
              name: 'ProtocolDeviationReport',
              component: () => import('./pages/DMID/SR/ProtocolDeviationReport.vue')
            },
            {
              path: 'ReportaProtocolDeviation',
              name: 'ReportaProtocolDeviation',
              component: () => import('./pages/DMID/SR/ReportaProtocolDeviation.vue')
            },
            {
              path: 'ProtocolNumberRequest',
              name: 'ProtocolNumberRequest',
              component: () => import('./pages/DMID/SR/ProtocolNumberRequest.vue')
            },
            {
              path: 'TeleconferenceSupport',
              name: 'SRTeleconferenceSupport',
              component: () => import('./pages/DMID/SR/TeleconferenceSupport.vue')
            },
            {
              path: 'TeleconferenceSupportReport',
              name: 'TeleconferenceSupportReport',
              component: () => import('./pages/DMID/SR/TeleconferenceSupportReport.vue')
            },
            {
              path: 'Training',
              name: 'SRTraining',
              component: () => import('./pages/DMID/SR/Training.vue')
            },
            {
              path: 'TrainingApproval',
              name: 'TrainingApproval',
              component: () => import('./pages/DMID/SR/TrainingApproval.vue')
            },
            {
              path: 'TrainingReport',
              name: 'TrainingReport',
              component: () => import('./pages/DMID/SR/TrainingReport.vue')
            }
          ]
        },
        {
          path: 'Results',
          name: 'Results',
          component: () => import('./pages/DMID/Results/ResultsHome.vue')
        }
      ]
    },

    {
      path: '/components',
      name: 'components',
      component: () => import('./views/Components.vue')
    }
    // {
    //  path: '/about',
    //  name: 'about',
    //  component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    // {
    //  path: '/test',
    //  name: 'test',
    //  component: () => import( './views/Test4.vue')
    // },

  ]
})
