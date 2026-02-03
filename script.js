window.onload = function() {
    document.getElementById('consentButton').addEventListener('click', function() {
        // GoogleフォームのURLリスト
        var forms = [
            "https://docs.google.com/forms/d/e/1FAIpQLSfvgKdkpbo5S2midiFM2IWQmLp_NMOxMDpUTaIWq8sc9FnJEA/viewform?usp=header",
            "https://docs.google.com/forms/d/e/1FAIpQLSe6oykAyBTFuOgrpLdO1URF6IAQZ2RSbrhzQXEA0IUBuesuZQ/viewform?usp=header",
            "https://docs.google.com/forms/d/e/1FAIpQLSfABvu8eE1ZU06gHe9q2ApN5fS5dhut8UV7kL-eeTJ0b_pfzQ/viewform?usp=header",
            "https://docs.google.com/forms/d/e/1FAIpQLSdU3XdV5mQDZVirqjupO6MGMj1CJ0j25phUWrB8BJclqJFT7w/viewform?usp=header",
            "https://docs.google.com/forms/d/e/1FAIpQLSfuw1urbqdQZeqLiJTf8YinQ5yxSlIh3am9c3cAdEcVjRTEHw/viewform?usp=header",
            "https://docs.google.com/forms/d/e/1FAIpQLSeACM6YVASGPMu5JLLiu3BVqXhIZGey0idLFAQJIodlk77SDA/viewform?usp=header",
            "https://docs.google.com/forms/d/e/1FAIpQLSdRslhTRapdJrpY_45XvymIN75TAfhc3G0NJ0pj5Afslonj6A/viewform?usp=header",
            "https://docs.google.com/forms/d/e/1FAIpQLSfVsdsRLRwGTHEtAi9BChYBYm4iAxdwmFgBrtVZJuSvm4YAgQ/viewform?usp=header"
        ];

        // ランダムなURLを選択
        var randomIndex = Math.floor(Math.random() * forms.length);
        var randomFormUrl = forms[randomIndex];

        // 選択されたURLにリダイレクト
        window.location.href = randomFormUrl;
    });
};

