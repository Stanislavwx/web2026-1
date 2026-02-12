# web2026-1

Лабораторна робота №1.

Це лабораторна робота на Node.js, яка виводить привітання з твоїм GitHub-ніком, і запускається в Docker.

## Запуск

```bash
sudo docker compose run --rm app
```

## Як працює програма

Скрипт `index.js` виконує команду `git remote get-url origin`, витягує username з URL GitHub репозиторію та виводить повідомлення:

```text
Hello, <username>
```

## Приклад результату

```text
Hello, Stanislavwx
```
