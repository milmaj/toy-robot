const commands = [
    {
        name: 'Place',
        shortcut: 'P',
        onClick: () => {
            dispatchEvent(new KeyboardEvent('keydown', { 'key': 'P' }));
        }
    },
    {
        name: 'MOVE',
        shortcut: 'Enter',
        onClick: () => {
            dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Enter' }));
        }
    },
    {
        name: 'RIGHT',
        shortcut: '>',
        onClick: () => {
            dispatchEvent(new KeyboardEvent('keydown', { 'key': 'ArrowRight' }));
        }
    },
    {
        name: 'LEFT',
        shortcut: '<',
        onClick: () => {
            dispatchEvent(new KeyboardEvent('keydown', { 'key': 'ArrowLeft' }));
        }
    },
    {
        name: 'REPORT',
        shortcut: 'R',
        onClick: () => {
            dispatchEvent(new KeyboardEvent('keydown', { 'key': 'R' }));
        }
    },

]

const ControlPanel = () => {
    return (
        <div className="ControlPanel">
            <div className="-my-1 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <tbody className="bg-white divide-y divide-gray-200">
                                {commands.map((command) => (
                                    <tr key={command.name}>
                                        <td className="px-2 py-2 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{command.name}</div>
                                            <div className="text-sm text-gray-500">Shortcut: {command.shortcut}</div>
                                        </td>

                                        <td className="px-2 py-2 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                type="button"
                                                onClick={command.onClick}
                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                RUN
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ControlPanel;