// Splits "Event : Result" into two rows: what was won first, then the event that gave it.
export default function AwardLabel({ label, color = "#FAC335" }: { label: string; color?: string }) {
  const [event, ...rest] = label.split(":")
  const result = rest.join(":").trim()

  if (!result) return <span className="font-semibold" style={{ color }}>{event.trim()}</span>

  return (
    <span className="flex flex-col gap-0.5" style={{ color }}>
      <span className="font-semibold leading-snug">{result}</span>
      <span className="text-sm font-semibold leading-snug">{event.trim()}</span>
    </span>
  )
}
