import { useState, useEffect } from 'react';

export const useTypewriter = ({ name, role, onComplete }) => {
    const [displayText, setDisplayText] = useState('');
    const [roleText, setRoleText] = useState('');
    const [phase, setPhase] = useState('typingName'); // 'typingName', 'pausing', 'typingRole', 'completed'
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let timeout;

        if (phase === 'typingName') {
            if (displayText.length < name.length) {
                timeout = setTimeout(() => {
                    setDisplayText(name.slice(0, displayText.length + 1));
                }, 100); // Typing speed for name
            } else {
                setPhase('pausing');
            }
        } else if (phase === 'pausing') {
            timeout = setTimeout(() => {
                setPhase('typingRole');
            }, 800); // 800ms pause
        } else if (phase === 'typingRole') {
            if (roleText.length < role.length) {
                timeout = setTimeout(() => {
                    setRoleText(role.slice(0, roleText.length + 1));
                }, 80); // Typing speed for role
            } else {
                setPhase('completed');
                if (onComplete) onComplete();
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, roleText, phase, name, role, onComplete]);

    // Cursor blink effect
    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 530);
        return () => clearInterval(interval);
    }, []);

    return {
        nameText: displayText,
        roleText,
        phase,
        showCursor: phase !== 'completed' ? showCursor : false // specific requirement: visible while typing, user didn't say hide after? "Cursor blinking effect should be visible while typing". Usually hide or stop blinking after. Let's stop blinking or hide.
    };
};
