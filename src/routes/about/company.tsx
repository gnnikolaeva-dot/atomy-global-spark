import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/company')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/about/company"!</div>
}
