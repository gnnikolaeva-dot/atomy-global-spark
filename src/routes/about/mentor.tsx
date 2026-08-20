import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/mentor')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/about/mentor"!</div>
}
