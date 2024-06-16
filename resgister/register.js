document.addEventListener('DOMContentLoaded', function () {
    let participantCount = 1;
    const addButton = document.getElementById('add');
    const participantsFieldset = document.querySelector('.participants');
    const form = document.querySelector('form');
    const summarySection = document.getElementById('summary');

    addButton.addEventListener('click', function () {
        participantCount++;
        const participantSection = document.querySelector('.participant1').cloneNode(true);

        participantSection.className = 'participant' + participantCount;

        // Update the IDs and names to be unique
        const fields = participantSection.querySelectorAll('input, select, label');
        fields.forEach(field => {
            if (field.id) {
                const newId = field.id.replace(/\d+$/, '') + participantCount;
                field.id = newId;
            }
            if (field.name) {
                const newName = field.name.replace(/\d+$/, '') + participantCount;
                field.name = newName;
            }
            if (field.tagName === 'LABEL') {
                field.htmlFor = field.htmlFor.replace(/\d+$/, '') + participantCount;
            }
        });

        // Update the participant number text
        participantSection.querySelector('p').textContent = 'Participant ' + participantCount;

        // Insert the new participant section before the Add Participant button
        participantsFieldset.insertBefore(participantSection, addButton);
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Calculate total fees
        let totalFees = 0;
        const feeInputs = document.querySelectorAll('input[name^="fee"]');
        feeInputs.forEach(input => {
            if (input.value.trim() !== '') {
                totalFees += parseFloat(input.value);
            }
        });

        // Get adult name
        const adultName = document.getElementById('adult_name').value.trim();

        // Hide the form
        form.style.display = 'none';

        // Show the summary and insert message
        summarySection.textContent = `Thank you ${adultName} for registering. You have registered ${participantCount} participant(s) and owe $${totalFees} in Fees.`;
        summarySection.style.display = 'block';
    });
});
