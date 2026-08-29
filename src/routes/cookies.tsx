import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Placeholder } from "@/components/site/LegalPage";

export const Route = createFileRoute("/cookies")({
  head: () => ({ meta: [{ title: "Политика использования cookie" }] }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <LegalPage title="Политика использования cookie">
      <p>
        Сайт <Placeholder>[адрес сайта]</Placeholder> использует cookie — небольшие файлы, которые
        помогают корректно отображать страницы, сохранять настройки и понимать, как используется
        сайт.
      </p>
      <h2>1. Какие cookie используются</h2>
      <ul>
        <li>необходимые — обеспечивают базовую работу сайта и формы;</li>
        <li>аналитические — помогают оценивать посещаемость и улучшать интерфейс;</li>
        <li>функциональные — сохраняют выбранные настройки, если они используются.</li>
      </ul>
      <h2>2. Управление cookie</h2>
      <p>
        Вы можете удалить cookie или запретить их использование в настройках браузера. Отключение
        необходимых cookie может повлиять на работу отдельных функций сайта.
      </p>
      <h2>3. Контакты</h2>
      <p>
        По вопросам использования cookie: <Placeholder>[email оператора]</Placeholder>.
      </p>
    </LegalPage>
  );
}
