import React, {ElementRef, useRef} from 'react';
import {Input} from 'src/components/form/Input';
import {Icon} from 'src/components/icon/Icon';
import {S} from './Form_Styles'
import emailjs from "@emailjs/browser";

type Props = {
    id?:string
}

export const Form:React.FC<Props> = (props) => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return;

        emailjs
            .sendForm('service_0hfsb7a', 'template_2bly7w9', form.current, {
                publicKey: 'IRQ8EEzTgzk0nzIb0',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };
    return (
    <S.Form ref={form} onSubmit={sendEmail} id={props.id}>
      <Input required labelText={"Your name:"} type={"text"} name={"user_name"}/>
      <Input required labelText={"Your email  address:"} type={"email"} name={"email"}/>
      <Input required labelText={"Tell about the project:"} type={"text"} name={"message"}/>
      <S.FormButton type={"submit"}>Send <Icon iconId={"arrowRight"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/></S.FormButton>
    </S.Form>
  );
};


