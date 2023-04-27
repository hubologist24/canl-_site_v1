
import React from "react"

import { Container, Text, Button, createStyles } from '@mantine/core';


const Bilgi = () => {

    const useStyles = createStyles((theme) => ({

        red: {
            color: "red",

        },

        Fonts: {
            fontFamily: "monospace,sans-serif"
        }
    }
    ))

    const { classes, cx } = useStyles();

    return (
        <Container p="sm" className={cx(classes.Fonts)}>
            <h3>Token</h3>
            <li> Token Fabrikasından kendi tokenlarınızı binance chain içinde oluşturabilirsiniz.</li>
            <li> Token Listesinde oluşturduğunuz tokenları görebilir metamaska import edebilirsiniz</li>
            <li> Token Listesinden ayrıca girilen miktar kadar tokenınızı ekstra üretebilirsiniz</li>
            <li> Oluşturduğunuz tokenlarınızı arkadaşlarınıza transfer edebilirsiniz</li>

            <h3>Çekiliş Kuralları</h3>
            <li> Çekilişi herkes başlatabilir yada bitirebilir</li>
            <li> Çekiliş başlangıcından itiberen en az 3 gün sürer, bu süre geçtikten sonra  bitirilebilir</li>
            <li> Yeni Çekiliş son çekiliş bitimiden  en az 4 saat geçtikten sonra  başlatılabilir</li>
            <li> Çekilişe en az 10 kişi katılmazsa çekiliş iptal olur giriş ücretleri geri dağıtılır </li>
            <li>
                <Text variant="link" component="a" href="https://bscscan.com/address/0x0c655acbc6e3a840da49e99977065aedf5be341c">
                    Çekiliş kontraktı bütün hareketleri linkteki transactions tabından takip edebilirsiniz
                    <div>  Örneğin kim başlattı kim bitirdi kim kazandı ne kadar ödül kazandı vs.</div>
                </Text>
            </li>
            <h3> Çekiliş Giriş için gerekliler</h3>
            <li> Çekilişe ilk kez katılmak zor fakat diğer blockchain uygulamaları kullanmanız
                <div>içinde aynı işlemleri yapcağınız için ilk kurulum önemli </div></li>
            <li> Fakat bir kez katıldıktan sonra tek tuşla istediğiniz çekilişe katılabilirsiniz   </li>
            <li>
                <Text variant="link" target="_blank" component="a" href="https://www.youtube.com/watch?v=-LWjE4xQpCQ">
                    Önce meta mask  kurulmalı
                </Text>
            </li>
            <li >Binance ağı metamaska eklenmeli</li>
            <li className={cx(classes.red)} >Metamask oluşturduğunuz cüzdanın 9 kelimenizi bir kağıda yazın!!!</li>
            <li >Binance ve binance tr uygulaması kurun</li>
            <li >Binancedan metamask cüzdanınıza  bep20 ile bnb gönderin</li>
            <li >Önce çok ufak bir tutar gönderip doğru adrese gönderdiğinizden emin olabilirsiniz</li>
            <li >Binance bnb gönderim komisyonları çok düşük</li>

            <div> </div>



        </Container >
    )

}

export { Bilgi }