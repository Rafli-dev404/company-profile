interface AccordionItemData {
  id: string
  title: string
  content: string
}

interface AccordionItemProps {
  item: AccordionItemData
  isOpen: boolean
  onToggle: () => void
}

export type {AccordionItemData, AccordionItemProps}
