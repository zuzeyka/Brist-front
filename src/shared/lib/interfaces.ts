export interface Categories {
    id: string;
    name: string;
    description: string;
    // "genre" (default when absent), "platform", "type" (player count) or "feature".
    kind?: string;
    createdAt: string;
}

export interface GameEvent {
    id: string;
    name: string;
    description?: string;
    startAt: string;
    endAt: string;
    createdAt?: string;
}

export interface GameEventForGame {
    id: string;
    gameId: string;
    eventId: string;
    createdAt?: string;
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

export interface GameComment {
    id: string;
    // Id of the post, guide, news item, screenshot or video commented on.
    gamePostId: string;
    content: string;
    authorId: string;
    // The comment this one replies to, shown quoted above it.
    replyToId?: string;
    likesCount?: number;
    createdAt: string;
}

export interface GameGroup {
    id: string;
    gameId: string;
    subscribersCount?: number;
    onlineCount?: number;
    createdAt: string;
}

export interface GameGuide {
    id: string;
    title: string;
    description?: string;
    likesCount: number;
    discussionId: string;
    contentUrl?: string;
    gameId: string;
    authorId: string;
    gameGroupId: string;
    content: string;
    createdAt: Date;
    commentsCount?: number;
}

export interface GameNews {
    id: string;
    title: string;
    description?: string;
    likesCount: number;
    discussionId: string;
    contentUrl?: string;
    gameId: string;
    authorId: string;
    gameGroupId: string;
    content: string;
    createdAt: Date;
    commentsCount?: number;
}

export interface GamePosts {
    id: string;
    title: string;
    description?: string;
    likesCount: number;
    discussionId: string;
    contentUrl?: string;
    gameId: string;
    gameTopicId: string;
    authorId: string;
    content: string;
    createdAt: Date;
    commentsCount?: number;
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

export interface Video {
    id: string;
    title?: string;
    description?: string;
    likesCount: number;
    gameId: string;
    authorId: string;
    contentUrl: string;
    // Still frame shown before the video plays.
    previewImage?: string;
    createdAt: Date;
    commentsCount?: number;
}

export interface WishedGame {
    id: string;
    ownedGameId: string;
    userId: string;
    createdAt: string;
}


export interface Screenshot {
    id: string;
    title: string;
    description: string;
    likesCount: number;
    gameId: string;
    authorId: string;
    contentUrl: string;
    createdAt: Date;
    commentsCount?: number;
}

export interface Developer {
    id: string;
    subscribersCount: number;
    name: string;
    description: string;
    avatar: string;
    backgroundImage: string;
    urlForNewsPage: string;
    createdAt: Date;
}

export interface Publisher {
    id: string;
    subscribersCount: number;
    name: string;
    description: string;
    avatar: string;
    backgroundImage: string;
    urlForNewsPage: string;
    createdAt: Date;
}

export interface GameInShop {
    id: string;
    name: string;
    price: number;
    discount: number;
    discountFinish: Date;
    previeImage: string;
    description: string;
    dateOfRelease: Date;
    developerId: string;
    publisherId: string;
    urlForContent: string;
    createdAt: string;
}

export interface DlcInShop extends GameInShop {
    gameId: string;
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

export interface GameBundle {
    name: string;
    description?: string;
    price: number;
    discount: number;
    discountFinish?: Date;
    createdAt?: Date;
}

export interface Discussion {
    id: string;
    authorId: string;
    attachedId: string;
    content: string;
    rate: number;
    likesCount: number;
    createdAt: Date;
}

export interface User {
    name: string;
    passwordSalt: string;
    description: string;
    email: string;
    image: string;
    verified: boolean;
    amountOfMoney: number;
    amountOfXp: number;
    createdAt: Date;
}

export interface SystemRequirement {
    id: string;
    gameId: string;
    os: string;
    processor: string;
    ram: string;
    video: string;
    freeDiskSpace: string;
    createdAt: string;
}