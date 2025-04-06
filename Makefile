
# Установка зависимостей
install:
	npm install

# Запуск разработки
start:
	npm run dev

# Сборка проекта
build:
	npm run build


# Линтинг
lint-ts:
	npm run lint:ts

lint-scss:
	npm run lint:scss

# Исправление проблем
fix-ts:
	npm run lint:ts:fix

fix-scss:
	npm run lint:scss:fix

fix-format:
	npm run format

fix-all:
	make fix-ts && make fix-scss && make fix-format

