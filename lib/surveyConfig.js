const defaultReasonOptions = [
  { emoji: '\u{1F3E2}', label: 'Pre-foreclosure / behind on mortgage', value: 'Pre-foreclosure / behind on mortgage' },
  { emoji: '\u{1F3E5}', label: 'Medical debt / financial hardship', value: 'Medical debt / financial hardship' },
  { emoji: '\u2696\uFE0F', label: 'Divorce / separation', value: 'Divorce / separation' },
  { emoji: '\u{1F4CB}', label: 'Tax lien / delinquent taxes', value: 'Tax lien / delinquent taxes' },
  { emoji: '\u{1F3E0}', label: 'Inherited property', value: 'Inherited property' },
  { emoji: '\u2708\uFE0F', label: 'Relocation / life change', value: 'Relocation / life change' },
];

const tiredLandlordReasonOptions = [
  { emoji: '\u{1F6AB}', label: 'Tired of being a landlord', value: 'Tired of being a landlord' },
  { emoji: '\u{1F4B8}', label: 'Property is losing money', value: 'Property is losing money' },
  { emoji: '\u{1F3E2}', label: 'Eviction / bad tenants', value: 'Eviction / bad tenants' },
  { emoji: '\u{1F527}', label: 'Too many repairs needed', value: 'Too many repairs needed' },
  { emoji: '\u2708\uFE0F', label: 'Relocating / moving away', value: 'Relocating / moving away' },
  { emoji: '\u{1F4CA}', label: 'Want to invest elsewhere', value: 'Want to invest elsewhere' },
];

const jobLossReasonOptions = [
  { emoji: '\u{1F4BC}', label: 'Job loss / unemployment', value: 'Job loss / unemployment' },
  { emoji: '\u2708\uFE0F', label: 'Relocating for new job', value: 'Relocating for new job' },
  { emoji: '\u{1F3E2}', label: 'Behind on mortgage', value: 'Behind on mortgage' },
  { emoji: '\u{1F4B8}', label: 'Financial hardship', value: 'Financial hardship' },
  { emoji: '\u{1F3E0}', label: 'Downsizing to reduce costs', value: 'Downsizing to reduce costs' },
  { emoji: '\u2696\uFE0F', label: 'Other life change', value: 'Other life change' },
];

const standardStepOrder = ['address', 'propertyType', 'condition', 'price', 'timeline', 'reason', 'listed', 'contact'];
const founderStepOrder = ['propertyType', 'timeline', 'condition', 'address', 'contact'];

export const pageConfigs = {
  home: {
    sourceName: 'American Home Advisor - Direct Response',
    reasonOptions: defaultReasonOptions,
    stepOrder: standardStepOrder,
    totalSteps: 8,
  },
  advertorial: {
    sourceName: 'American Home Advisor - Advertorial',
    reasonOptions: defaultReasonOptions,
    stepOrder: standardStepOrder,
    totalSteps: 8,
  },
  'advertorial-founder': {
    sourceName: 'American Home Advisor - Founder Article',
    reasonOptions: [],
    stepOrder: founderStepOrder,
    totalSteps: 5,
  },
  divorce: {
    sourceName: 'American Home Advisor - Divorce',
    reasonOptions: defaultReasonOptions,
    stepOrder: standardStepOrder,
    totalSteps: 8,
  },
  downsizing: {
    sourceName: 'American Home Advisor - Downsizing',
    reasonOptions: defaultReasonOptions,
    stepOrder: standardStepOrder,
    totalSteps: 8,
  },
  inherited: {
    sourceName: 'American Home Advisor - Inherited',
    reasonOptions: defaultReasonOptions,
    stepOrder: standardStepOrder,
    totalSteps: 8,
  },
  'job-loss': {
    sourceName: 'American Home Advisor - Job Loss',
    reasonOptions: jobLossReasonOptions,
    stepOrder: standardStepOrder,
    totalSteps: 8,
  },
  'medical-financial': {
    sourceName: 'American Home Advisor - Medical Financial',
    reasonOptions: defaultReasonOptions,
    stepOrder: standardStepOrder,
    totalSteps: 8,
  },
  'pre-foreclosure': {
    sourceName: 'American Home Advisor - Pre-Foreclosure',
    reasonOptions: defaultReasonOptions,
    stepOrder: standardStepOrder,
    totalSteps: 8,
  },
  'tax-lien': {
    sourceName: 'American Home Advisor - Tax Lien',
    reasonOptions: defaultReasonOptions,
    stepOrder: standardStepOrder,
    totalSteps: 8,
  },
  'tired-landlord': {
    sourceName: 'American Home Advisor - Tired Landlord',
    reasonOptions: tiredLandlordReasonOptions,
    stepOrder: standardStepOrder,
    totalSteps: 8,
  },
  'express-homebuyers': {
    sourceName: 'American Home Advisor - Express Homebuyers',
    reasonOptions: defaultReasonOptions,
    stepOrder: standardStepOrder,
    totalSteps: 8,
  },
};
