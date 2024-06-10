const countdown = (num, callback) => {
    setTimeout(() => {
        console.log(num);
        if (num > 1) {
            countdown(num - 1, callback);
        } else {
            callback();
        }
    }, 1000);
};

const displayIndependenceDayMessage = () => {
    console.log("Happy Independence Day!");
};

countdown(10, () => {
    countdown(9, () => {
        countdown(8, () => {
            countdown(7, () => {
                countdown(6, () => {
                    countdown(5, () => {
                        countdown(4, () => {
                            countdown(3, () => {
                                countdown(2, () => {
                                    countdown(1, displayIndependenceDayMessage);
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
