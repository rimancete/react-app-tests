import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";

describe('"Cadastro de Participantes" screen - Formulario', () => {
  test("shouldn't add new items when participant input is empty", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    // encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    //encontrar o botão
    const button = screen.getByRole("button");
    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument();
    // garantir que o botão esteja desabilitado
    expect(button).toBeDisabled();
  });

  test("should add a participant when participant input is filled", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    // encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    //encontrar o botão
    const button = screen.getByRole("button");
    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    // clicar no botão de submeter
    fireEvent.click(button);

    // garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();

    //garantir que o input não tenha um valor
    expect(input).toHaveValue("");
  });

  test("shouldn't add duplicate name", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(button);

    const errorMessage = screen.getByRole("alert");
    expect(errorMessage.textContent).toBe(
      "Nomes duplicados não são permitidos"
    );
  });
  test("should remove error message after some seconds", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(button);

    let errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeInTheDocument();

    // experar N segundos

    act(() => {
      jest.runAllTimers();
    });
    errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeNull();
  });
});
