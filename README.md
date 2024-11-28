## Project Structure Backend

### Routes

```
routes/
├── modules/
│   ├── welcome.php
│   ├── modul1.php
│   ├── modul2.php
│   ├── etc...php
└── web.php
```

### Controllers

```
app/Http/Controllers/
├── Welcome/
│   ├── WelcomeController.php
├── Module1/
│   ├── Modeul1Controller.php
├── Module2/
│   ├── Modeul2Controller.php
```

### Modules

```
src/Domain/
├── Utils/
├── Shared/
│   ├── Actions/
│   ├── DTO/
│   ├── Jobs/
│   ├── Models/
│   ├── Policies/
│   ├── Query/
│   ├── Requests/
│   ├── ViewModels/
├── Welcome/
│   ├── Actions/
│   ├── DTO/
│   ├── Jobs/
│   ├── Models/
│   ├── Policies/
│   ├── Query/
│   ├── Requests/
│   ├── ViewModels/
├── Module1/
│   ├── Actions/
│   ├── DTO/
│   ├── Jobs/
│   ├── Models/
│   ├── Policies/
│   ├── Query/
│   ├── Requests/
│   ├── ViewModels/
```
## Project Frontend
```
resources/js/
├── Layouts/
├── Components/
├── reducer/
├── store/
├── Pages/Welcome/
│   ├── Components/
│   ├── Contexts/
│   ├── Interfaces/
│   ├── Index.tsx
│   ├── Show.tsx
├── Pages/Module1/
│   ├── Components/
│   ├── Contexts/
│   ├── Interfaces/
│   ├── Index.tsx
│   ├── Show.tsx
├── Pages/Module2/
│   ├── Components/
│   ├── Contexts/
│   ├── Interfaces/
│   ├── Index.tsx
│   ├── Show.tsx
```
