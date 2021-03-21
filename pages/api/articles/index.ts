import { articles } from '../../../data'

export default function handler(req: any, res: any): void {
  res.status(200).json(articles)
}
