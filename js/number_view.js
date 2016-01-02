var mathUser = new TestMath(),
    target = document.getElementsByClassName("ceil-result")[0];

    mathUser.setCeil(55.9);
    target.innerHTML = mathUser.getCeil();

    console.log(mathUser.getCeil());
