export interface Tag {
  text: string;
  color: string;
}

export interface Workflow {
  id: string;
  icon?: string;
  type: string;
  name: string;
  tags?: Tag[];
  emoji?: string;
  lastUpdated: string;
}
