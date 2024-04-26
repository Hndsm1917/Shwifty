import type { ProposalCard } from '@/types/types'
export default [
	{
		type: 'base',
		title: 'packages.base',
		price: 100,
		available: ['available.library', 'available.video', 'available.podcasts']
	},
	{
		type: 'melo',
		title: 'packages.melo',
		price: 300,
		available: [
			'available.library',
			'available.video',
			'available.podcasts',
			'available.individual'
		]
	},
	{
		type: 'meloplus',
		title: 'packages.meloplus',
		price: 500,
		available: [
			'available.library',
			'available.video',
			'available.podcasts',
			'available.individual',
			'available.family'
		]
	}
] as ProposalCard[]