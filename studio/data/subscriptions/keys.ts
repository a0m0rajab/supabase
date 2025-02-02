// [Joshen TODO] To remove subscription V2 after v2 is launched and stable to deprecate old billing ui + endpoints

export const subscriptionKeys = {
  subscriptionV2: (projectRef: string | undefined) =>
    ['projects', projectRef, 'subscriptionV2'] as const,
  orgSubscription: (orgSlug: string | undefined) =>
    ['organizations', orgSlug, 'subscription'] as const,
  addons: (projectRef: string | undefined) => ['projects', projectRef, 'addons'] as const,
  plans: (projectRef: string | undefined) => ['projects', projectRef, 'plans'] as const,
  preview: (projectRef: string | undefined) =>
    ['projects', projectRef, 'subscription-preview'] as const,
}
