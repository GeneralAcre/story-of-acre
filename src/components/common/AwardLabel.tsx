// Splits "Event : Result" so the result (what was won) stands out from the event name.
// `color` lets light backgrounds use a deeper gold that stays readable.
export default function AwardLabel({ label, color = "#FAC335" }: { label: string; color?: string }) {
  const [event, ...rest] = label.split(":")
  const result = rest.join(":").trim()

  if (!result) return <span className="font-semibold" style={{ color }}>{event.trim()}</span>

  return (
    <span style={{ color }}>
      <span className="opacity-75">{event.trim()}</span>
      <span className="opacity-40"> · </span>
      <span className="font-semibold">{result}</span>
    </span>
  )
}
