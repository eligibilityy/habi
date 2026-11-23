import { Tag } from "@/registry/habi/ui/tag";

export default function TagDisabled() {
  return (
    <>
      <Tag disabled>Passport</Tag>
      <Tag disabled defaultPressed>
        IDs
      </Tag>
    </>
  );
}
