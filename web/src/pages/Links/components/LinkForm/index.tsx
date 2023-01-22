import { TextBox } from "./style";

interface linkProps {
  linkSelected?: {
    label: string;
    url: string;
  }
}

export function LinkForm({ linkSelected }: linkProps) {

  return (
    <>
      <TextBox>
        <label htmlFor="label">Título</label>
        <input
          id='label'
          type="text"
          name="label"
          defaultValue={linkSelected?.label}
          required
        />
      </TextBox>

      <TextBox>
        <label htmlFor="url" >Url</label>
        <input
          id='url'
          type='text'
          name="url"
          defaultValue={linkSelected?.url}
          required
        />
      </TextBox>
    </>
  )
}