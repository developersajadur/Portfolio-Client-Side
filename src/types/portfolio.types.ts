

export type TProject = {
    _id: string;
    slug: string;
    name: string;
    description: string;
    technologies: string[];
    liveUrl: string;
    clientSideUrl?: string;
    serverSideUrl?: string;
    imageUrl: string;
    createdAt?: Date;
    updatedAt?: Date;
    _v?: string;
  };
  