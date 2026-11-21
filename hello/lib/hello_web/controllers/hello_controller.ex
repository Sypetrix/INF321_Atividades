defmodule HelloWeb.HelloController do
  use HelloWeb, :controller

  # Pattern matching no cabeçalho: cada cláusula só casa com um idioma.
  # Outro idioma (ex: /saudacao/es/carlos) não casa nenhuma cláusula e o Phoenix responde 400.
  def saudacao(conn, %{"lang" => "pt", "name" => nome}) do
    render(conn, :saudacao, saudacao: "Olá", name: nome)
  end

  def saudacao(conn, %{"lang" => "en", "name" => nome}) do
    render(conn, :saudacao, saudacao: "Hello", name: nome)
  end
end
