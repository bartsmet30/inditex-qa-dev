interface Category {
  id: number,
  name: string
}

interface Tag {
  id: number,
  name: string
}

export interface Pet {
  id: number,
  category: Category,
  name: string,
  photoUrls: [string],
  tags: [Tag],
  status: 'sold' | 'pending' | 'available'
}
