function renderHistory() {

    const history = getHistory();

    if (!history.length) {

        historyList.innerHTML = `
            <div class="empty-history">
                No conversions yet.
            </div>
        `;

        return;
    }

    historyList.innerHTML = history.map(item => {

        const time = new Date(
            item.timestamp
        ).toLocaleString();

        return `
            <div class="history-item">

                <div>

                    <div class="history-main">
                        ${item.from} → ${item.to}
                    </div>

                    <div class="history-time">
                        ${item.category} • ${time}
                    </div>

                </div>

            </div>
        `;

    }).join("");
}