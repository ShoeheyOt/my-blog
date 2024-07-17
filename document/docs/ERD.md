---
sidebar_position: 4
---

# ERD

```mermaid
erDiagram

    USER {
        id Int(PK)
        name string
        password string
        clerkId string
    }

    ARTICLE{
        id Int(PK)
        title string
        text string
        USER_Id user_id(FK)
        link string
        isPublished boolean
    }

USER ||--o{ARTICLE: "Zero or more"

```
