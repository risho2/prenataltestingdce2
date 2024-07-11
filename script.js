window.onload = function() {
    document.getElementById('consentButton').addEventListener('click', function() {
        // GoogleフォームのURLリスト
        var forms = [
            "https://docs.google.com/forms/d/16OfeUBrpXP5nXcx-fyquzJn8Iwwm2kFDM2Dbta4h0Lc/viewform",
            "https://docs.google.com/forms/d/1JHAMlda5N-JTb4aAlG1NBkX0y_tJfEMC-otgm0IqNAo/viewform",
            "https://docs.google.com/forms/d/1-wlxNPaT6bG_JtviD4WohfKX4Xx-4Nak7KOzaZxUJi8/viewform",
            "https://docs.google.com/forms/d/1J4wIAijAMr5iMKIjiqliNXWY02NUAYBhrIz2e3TipTY/viewform",
            "https://docs.google.com/forms/d/1Nx-IGfwAFvV4HdIIWbdU1lXO5h8iW7eWmbXew0EjITI/viewform"
        ];

        // ランダムなURLを選択
        var randomIndex = Math.floor(Math.random() * forms.length);
        var randomFormUrl = forms[randomIndex];

        // 選択されたURLにリダイレクト
        window.location.href = randomFormUrl;
    });
};
