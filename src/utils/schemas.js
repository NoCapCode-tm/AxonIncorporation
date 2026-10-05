// src/utils/schemas.js
import { z } from 'zod';

// ==========================================
// 1. SHARED VALIDATORS (Business Logic)
// ==========================================

// Enterprise B2B companies ignore leads from free email providers.
// This strict refinement forces users to input their institutional email.
const notFreeEmail = (email) => {
  const freeDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com'];
  const domain = email.split('@')[1];
  return !freeDomains.includes(domain?.toLowerCase());
};

const workEmailValidator = z
  .string()
  .min(1, 'Work email is required')
  .email('Invalid email format')
  .refine(notFreeEmail, {
    message: 'Please use your institutional or corporate email domain.',
  });

// ==========================================
// 2. CONTACT PAGE / SALES ROUTING SCHEMA
// ==========================================
export const contactSalesSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  workEmail: workEmailValidator,
  institutionName: z.string().min(2, 'Institution name is required'),
  roleTitle: z.string().min(2, 'Role or Title is required'),
  studentsCount: z.enum(['<500', '500-2000', '2000+'], {
    errorMap: () => ({ message: 'Please select your institution size' }),
  }),
  currentERP: z.string().optional(), // Optional field
});

// ==========================================
// 3. PARTNERSHIP / ECOSYSTEM SCHEMA
// ==========================================
export const partnerApplicationSchema = z.object({
  partnerType: z.enum(['Technology Integration', 'Reseller', 'Implementation Agency'], {
    errorMap: () => ({ message: 'Please select a partnership type' }),
  }),
  companyName: z.string().min(2, 'Company name is required'),
  workEmail: workEmailValidator,
  website: z.string().url('Please enter a valid URL (e.g., https://example.com)'),
  operatingRegion: z.string().min(2, 'Operating region is required'),
  context: z.string().min(10, 'Please provide a brief description of the integration (min 10 characters)'),
});

// ==========================================
// 4. LEAD MAGNET / GUIDE DOWNLOAD SCHEMA
// ==========================================
// Used for Progressive Profiling in the /resources/learn section
export const leadMagnetSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  workEmail: workEmailValidator,
  schoolSize: z.enum(['<500', '500-2000', '2000+'], {
    errorMap: () => ({ message: 'Please select school size' }),
  }),
});