# Agents.md

## Code Architecture
- Prefer creating reusable components
- Use a CASM architecture: Controllers, Actions, Services and Models
  - Controllers are entry points and only concern themselves with evaluating inputs, guards/middleware and formatting outputs. No business logic here.
  - Actions perform business logic. They do not format inputs or outputs, no direct database operations. Only business logic. Probably where the most code is located.
  - Services interact with the database through the models. No business logic here, no input/output formatting
  - Models are ORM entities.
  - Controllers only import actions, actions only import services, services only import models. Actions do not import other actions, services do not import other services. Controllers may import multiple actions, actions may import multiple services.


## Dev instructions
- Always run `pnpm lint` after making changes
