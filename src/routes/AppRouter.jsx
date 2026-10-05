import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';

// ==========================================
// 1. CORE & LAYOUT
// ==========================================
const Home = lazy(() => import('@/pages/Home'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// ==========================================
// 2. PLATFORM OVERVIEW & MODULES
// ==========================================
const PlatformOverview = lazy(() => import('@/pages/Platform/Index'));
const Operations = lazy(() => import('@/pages/Platform/Operations'));
const Academics = lazy(() => import('@/pages/Platform/Academics'));
const Communication = lazy(() => import('@/pages/Platform/Communication'));
const Intelligence = lazy(() => import('@/pages/Platform/Intelligence'));
const Infrastructure = lazy(() => import('@/pages/Platform/Infrastructure'));

// ==========================================
// 3. SOLUTIONS (BY ROLE)
// ==========================================
const SolutionsGateway = lazy(() => import('@/pages/Solutions/Index'));
const Leadership = lazy(() => import('@/pages/Solutions/Leadership'));
const Administrators = lazy(() => import('@/pages/Solutions/Administrators'));
const Teachers = lazy(() => import('@/pages/Solutions/Teachers'));
const Parents = lazy(() => import('@/pages/Solutions/Parents'));

// ==========================================
// 4. SCHOOLS (BY TYPE & CURRICULUM)
// ==========================================
const SchoolsGateway = lazy(() => import('@/pages/Schools/Index'));
const K12 = lazy(() => import('@/pages/Schools/K12'));
const MultiCampus = lazy(() => import('@/pages/Schools/MultiCampus'));
const CurriculumIB = lazy(() => import('@/pages/Schools/Curriculum/Ib'));
const CurriculumCBSE = lazy(() => import('@/pages/Schools/Curriculum/Cbse'));

// ==========================================
// 5. RESOURCES
// ==========================================
const ResourcesHub = lazy(() => import('@/pages/Resources/Index'));
const Learn = lazy(() => import('@/pages/Resources/Learn'));
const Proof = lazy(() => import('@/pages/Resources/Proof'));
const Product = lazy(() => import('@/pages/Resources/Product'));
const Support = lazy(() => import('@/pages/Resources/Support'));

// ==========================================
// 6. COMPANY, PRICING & SUSTAINABILITY
// ==========================================
const Pricing = lazy(() => import('@/pages/Pricing/Index'));
const CompanyOverview = lazy(() => import('@/pages/Company/Index'));
const Mission = lazy(() => import('@/pages/Company/Mission'));
const Careers = lazy(() => import('@/pages/Company/Careers'));
const Partners = lazy(() => import('@/pages/Company/Partners'));
const Contact = lazy(() => import('@/pages/Company/Contact'));
const Sustainability = lazy(() => import('@/pages/sustainability/Sustainability'));

// ==========================================
// 7. TRUST & LEGAL CENTER
// ==========================================
const TrustCenter = lazy(() => import('@/pages/trust/TrustCenter'));
const Security = lazy(() => import('@/pages/trust/Security'));
const Privacy = lazy(() => import('@/pages/trust/Privacy'));
const Subprocessors = lazy(() => import('@/pages/trust/Subprocessors'));
const VulnDisclosure = lazy(() => import('@/pages/trust/VulnDisclosure'));
const Legality = lazy(() => import('@/pages/trust/Legality'));


export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Injects Navbar, Footer, and ScrollRestoration
    errorElement: <NotFound />, // Catches routing errors natively
    children: [
      { index: true, element: <Home /> },
      
      /* --- PLATFORM --- */
      { path: 'platform', element: <PlatformOverview /> },
      { path: 'platform/operations', element: <Operations /> },
      { path: 'platform/academics', element: <Academics /> },
      { path: 'platform/communication', element: <Communication /> },
      { path: 'platform/intelligence', element: <Intelligence /> },
      { path: 'platform/infrastructure', element: <Infrastructure /> },

      /* --- SOLUTIONS --- */
      { path: 'solutions', element: <SolutionsGateway /> },
      { path: 'solutions/leadership', element: <Leadership /> },
      { path: 'solutions/administrators', element: <Administrators /> },
      { path: 'solutions/teachers', element: <Teachers /> },
      { path: 'solutions/parents', element: <Parents /> },

      /* --- SCHOOLS --- */
      { path: 'schools', element: <SchoolsGateway /> },
      { path: 'schools/k-12', element: <K12 /> },
      { path: 'schools/multi-campus', element: <MultiCampus /> },
      { path: 'schools/curriculum/ib', element: <CurriculumIB /> },
      { path: 'schools/curriculum/cbse', element: <CurriculumCBSE /> },

      /* --- RESOURCES --- */
      { path: 'resources', element: <ResourcesHub /> },
      { path: 'resources/learn', element: <Learn /> },
      { path: 'resources/proof', element: <Proof /> },
      { path: 'resources/product', element: <Product /> },
      { path: 'resources/support', element: <Support /> },

      /* --- PRICING & COMPANY --- */
      { path: 'pricing', element: <Pricing /> },
      { path: 'company', element: <CompanyOverview /> },
      { path: 'company/mission', element: <Mission /> },
      { path: 'company/careers', element: <Careers /> },
      { path: 'company/partners', element: <Partners /> },
      { path: 'company/contact', element: <Contact /> },
      { path: 'company/sustainability', element: <Sustainability /> },

      /* --- TRUST & LEGAL --- */
      { path: 'trust', element: <TrustCenter /> },
      { path: 'trust/security', element: <Security /> },
      { path: 'trust/privacy', element: <Privacy /> },
      { path: 'trust/subprocessors', element: <Subprocessors /> },
      { path: 'trust/vulnerability-disclosure', element: <VulnDisclosure /> },
      { path: 'legal/terms', element: <Legality /> },
      
      /* --- CATCH ALL (404) --- */
      { path: '*', element: <NotFound /> },
    ],
  },
]);