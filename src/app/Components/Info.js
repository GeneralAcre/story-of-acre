export default function SectionHeader({ label = "PROJECT NAME" }) {
    return (
      <p className="text-[#d8ff4a] text-[28px] sm:text-[36px] mb-2">
        {`[/>`} {label}
      </p>
    );
  }