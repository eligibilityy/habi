import { Tag, TagGroup } from "@/registry/habi/ui/tag";

export default function TagDemo() {
  return (
    <TagGroup multiple defaultValue={["passport"]} aria-label="Filter services">
      <Tag value="passport">Passport</Tag>
      <Tag value="ids">IDs</Tag>
      <Tag value="taxes">Taxes</Tag>
      <Tag value="health">Health</Tag>
    </TagGroup>
  );
}
