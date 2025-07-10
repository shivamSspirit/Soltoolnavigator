// app/types.ts
export interface EcosystemTool {
    name: string;
    description: string;
    tags?: string[];
    repo: string;
  }
  
  export interface EcosystemCategory {
    category: string;
    description: string;
    tools: EcosystemTool[];
  }