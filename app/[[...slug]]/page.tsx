import 'leaflet/dist/leaflet.css'
import '../../src/index.css'
import { CatchAllClient } from './CatchAllClient'

export function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ['stores'] },
    { slug: ['login'] },
    { slug: ['signup', 'store'] },
    { slug: ['signup', 'student'] },
    { slug: ['student'] },
    { slug: ['student', 'recent'] },
    { slug: ['student', 'account'] },
    { slug: ['owner'] },
    { slug: ['owner', 'edit'] },
    { slug: ['owner', 'account'] },
    { slug: ['admin'] },
    { slug: ['admin', 'store', 'add'] },
    { slug: ['admin', 'owners'] }
  ]
}

export default function Page() {
  return <CatchAllClient />
}
