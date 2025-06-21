# NestJS TypeScript DDD Skeleton

## Portfolio Project Overview

This is a portfolio project showcasing a skeleton backend built with NestJS framework, applying Hexagonal Architecture
and Domain-Driven Design (DDD) patterns. The project serves as a template for building scalable, maintainable, and
well-structured backend applications.

## Architecture

This project implements:

- **Hexagonal Architecture** (also known as Ports and Adapters): Separating the core business logic from external
  concerns
- **Domain-Driven Design**: Focusing on the core domain and domain logic
- **SOLID Principles**: Following best practices for object-oriented design
- **CQRS Pattern**: Separating command and query responsibilities

## Project Structure

The project is organized into modules following DDD principles:

```
src/
├── address/                  # Address module
│   ├── domain/               # Domain layer with entities and value objects
│   ├── application/          # Application services
│   └── infrastructure/       # Controllers, repositories implementations
│
├── users/                    # Users module
│   ├── domain/               # Domain layer with entities and value objects
│   ├── application/          # Application services
│   └── infrastructure/       # Controllers, repositories implementations
│
└── commons/                  # Shared libraries and utilities
    └── src/
        └── lib/              # Reusable components across modules
            ├── value-object/ # Base value objects
            ├── criteria/     # Query criteria
            ├── service/      # Base services
            └── controller/   # Controller interfaces
```

## Current Modules

### Users Module

Handles user management with features like:

- User creation
- User retrieval
- User domain model with value objects (email, name, alias, etc.)

### Address Module

Manages address information with:

- Address domain model
- Value objects for address components (city, country, postal code, etc.)

### Commons Module

Contains shared libraries and utilities used across the application:

- Base value objects (String, Email, UUID, etc.)
- Criteria for queries
- Command and query services (CQRS pattern)
- Controller interfaces
- Common domain exceptions

## Technologies

- **NestJS**: Progressive Node.js framework
- **TypeScript**: Typed JavaScript
- **TypeORM**: ORM for database interactions

## Getting Started
