// /pages/api/createPage

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handler(req, res) {
	if ( req.method === 'POST' ) {
		return await createPage(req, res)
	}
	else {
		return res.status(405).json({ message: 'Method not allowed', success: false })
	}
}


async function createPage(req, res) {
	const body = req.body

	try {
		const newPage = await prisma.pages.create({
			data: {
				pageType: 		body.pageType,
				pageSlug: 		body.pageSlug,
				pageMenuTitle: 	body.pageMenuTitle,
				pageTitle: 		body.pageTitle,
				pageOrder: 		body.pageOrder
			}
		})

		return res.status(200).json({newPage, success: true})
	}
	catch (error) {
		console.error('Request error', error)
		res.status(500).json({ error: 'Error creating page', success: false })
	}
}