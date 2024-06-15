export interface Categories {
    id: string;
    name: string;
    description: string;
    createdAt: string;
}

export interface CategoryByAuthor {
    id: string;
    authorId: string;
    name: string;
    description: string;
    image: string;
    createdAt: string;
}

export interface CategoryByUser {
    id: string;
    authorId: string;
    name: string;
    description: string;
    createdAt: string;
}

export interface CategoryForGame {
    id: string;
    gameId: string;
    categoryId: string;
    createdAt: string;
}

export interface Chat {
    id: string;
    firstUser: string;
    secondUser: string;
    createdAt: string;
}

export interface Message {
    id: string;
    chatId: string;
    senderId: string;
    content: string;
    createdAt: string;
}

export interface Developer {
    id: string;
    name: string;
    subscribersCount: number;
    urlForNewsPage: string;
    description: string;
    avatar: string;
    backgroundImage?: string;
    createdAt: string;
}

export interface Publisher {
    id: string;
    subscribersCount: number;
    name: string;
    description: string;
    avatar: string;
    backgroundImage: string;
    urlForNewsPage: string;
    createdAt: string;
}

export interface GameComment {
    id: string;
    gamePostId: string;
    content: string;
    authorId: string;
    createdAt: string;
}

export interface GameGroup {
    id: string;
    gameId: string;
    createdAt: string;
}

export interface GameGuide {
    id: string;
    title: string;
    description?: string;
    likesCount: number;
    discussionId: string;
    imageUrl?: string;
    gameId: string;
    authorId: string;
    gameGroupId: string;
    content: string;
    createdAt: string;
}

export interface GameNews {
    id: string;
    title: string;
    description?: string;
    likesCount: number;
    discussionId: string;
    imageUrl?: string;
    gameId: string;
    authorId: string;
    gameGroupId: string;
    content: string;
    createdAt: string;
}

export interface GamePosts {
    id: string;
    title: string;
    description?: string;
    likesCount: number;
    discussionId: string;
    imageUrl?: string;
    gameId: string;
    gameTopicId: string;
    authorId: string;
    content: string;
    createdAt: string;
}

export interface GameTopic {
    id: string;
    attachedId: string;
    name: string;
    description: string;
    createdAt: string;
}

export interface GroupComment {
    id: string;
    groupId: string;
    content: string;
    userId: string;
    createdAt: string;
}

export interface Group {
    id: string;
    attachedId: string;
    name: string;
    description: string;
    createdAt: string;
}

export interface Post {
    id: string;
    title: string;
    description?: string;
    likesCount: number;
    discussionId: string;
    imageUrl?: string;
    gameId: string;
    authorId: string;
    content: string;
    createdAt: string;
}

export interface Topic {
    id: string;
    attachedId: string;
    name: string;
    description: string;
    authorId: string;
    postId: string;
    createdAt: string;
}

export interface LanguageInGame {
    id: string;
    gameId: string;
    languageId: string;
    createdAt: string;
}

export interface Language {
    id: string;
    name: string;
    createdAt: string;
}

export interface CategoryByUserForGame {
    id: string;
    name: string;
    image: string;
    createdAt: string;
}

export interface Friends {
    id: string;
    userId: string;
    friendId: string;
    createdAt: string;
}

export interface OwnedGame {
    id: string;
    ownedGameId: string;
    userId: string;
    createdAt: string;
}

export interface Screenshot {
    id: string;
    title?: string;
    description?: string;
    likesCount: number;
    discussionId: string;
    gameId: string;
    authorId: string;
    screenshotUrl: string;
    createdAt: string;
}

export interface UserCategory {
    id: string;
    userId: string;
    ownedGameId: string;
    categoryId: string;
    createdAt: string;
}

export interface UserComment {
    id: string;
    userId: string;
    authorId: string;
    content: string;
    createdAt: string;
}

export interface User {
    id: string;
    name: string;
    passwordSalt: string;
    salt: string;
    email: string;
    phone: string;
    createdAt: string;
}

export interface Video {
    id: string;
    title?: string;
    description?: string;
    likesCount: number;
    gameId: string;
    authorId: string;
    videoUrl: string;
    createdAt: string;
}

export interface WishedGame {
    id: string;
    ownedGameId: string;
    userId: string;
    createdAt: string;
}

export interface MaximumSystemRequirement {
    id: string;
    gameId: string;
    OS: string;
    processor: string;
    RAM: string;
    video: string;
    freeDiskSpace: string;
    createdAt: string;
}

export interface MinimalSystemRequirement {
    id: string;
    gameId: string;
    OS: string;
    processor: string;
    RAM: string;
    video: string;
    freeDiskSpace: string;
    createdAt: string;
}

export interface DLCInShop {
    id: string;
    gameId: string;
    name: string;
    price: number;
    discount: number;
    previeImage: string;
    dateOfRelease: string;
    developerId: string;
    publisherId: string;
    urlForContent: string;
    createdAt: string;
}

export interface GameInShop {
    id: string;
    name: string;
    price: number;
    discount: number;
    previeImage: string;
    dateOfRelease: string;
    developerId: string;
    publisherId: string;
    urlForContent: string;
    createdAt: string;
}

export interface Discussion {
    id: string;
    authorId: string;
    attachedId: string;
    content: string;
    likesCount: string;
    createdAt: string;
}










export interface GameInShopModel {
    name?: string;
    price: number;
    discount: number;
    discountFinish?: Date;
    previeImage?: string;
    description?: string;
    dateOfRelease: Date;
    developerId: string;
    publisherId: string;
    urlForContent?: string;
    createdAt?: Date;
}