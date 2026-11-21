defmodule HelloWeb.HelloControllerTest do
  use HelloWeb.ConnCase

  test "GET /saudacao/pt/carlos", %{conn: conn} do
    assert html_response(get(conn, ~p"/saudacao/pt/carlos"), 200) =~ "Olá, Carlos!"
  end

  test "GET /saudacao/en/carlos", %{conn: conn} do
    assert html_response(get(conn, ~p"/saudacao/en/carlos"), 200) =~ "Hello, Carlos!"
  end

  test "idioma não suportado não casa nenhuma cláusula", %{conn: conn} do
    assert_error_sent 400, fn -> get(conn, ~p"/saudacao/es/carlos") end
  end
end
