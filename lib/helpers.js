"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitFilePath = exports.removeBaseUrl = exports.getTableErrorGroups = void 0;
// General
function getTableErrorGroups(table) {
    const groups = {};
    for (const error of table.errors) {
        // Get group
        let group = groups[error.code];
        // Create group
        if (!group) {
            group = {
                code: error.code,
                rows: {},
                count: 0,
                headers: table.headers,
                messages: [],
            };
        }
        // Get row
        let row = group.rows[error['row-number'] || 0];
        // Create row
        if (!row) {
            let values = error.row || [];
            if (!error['row-number']) {
                values = table.headers || [];
            }
            row = {
                values,
                badcols: new Set(),
            };
        }
        // Ensure missing value
        if (error.code === 'missing-value') {
            row.values[error['column-number'] - 1] = '';
        }
        // Add row badcols
        if (error['column-number']) {
            row.badcols.add(error['column-number']);
        }
        else if (row.values) {
            row.badcols = new Set(row.values.map((_value, index) => index + 1));
        }
        // Save group
        group.count += 1;
        group.messages.push(error.message);
        group.rows[error['row-number'] || 0] = row;
        groups[error.code] = group;
    }
    return groups;
}
exports.getTableErrorGroups = getTableErrorGroups;
function removeBaseUrl(text) {
    return text.replace(/https:\/\/raw\.githubusercontent\.com\/\S*?\/\S*?\/\S*?\//g, '');
}
exports.removeBaseUrl = removeBaseUrl;
function splitFilePath(path) {
    const parts = path.split('/');
    return {
        name: parts.pop(),
        base: parts.join('/'),
        sep: parts.length ? '/' : '',
    };
}
exports.splitFilePath = splitFilePath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLFVBQVU7QUFFVixTQUFnQixtQkFBbUIsQ0FBQyxLQUFtQjtJQUNyRCxNQUFNLE1BQU0sR0FBb0MsRUFBRSxDQUFBO0lBQ2xELEtBQUssTUFBTSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUNoQyxZQUFZO1FBQ1osSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUU5QixlQUFlO1FBQ2YsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLEtBQUssR0FBRztnQkFDTixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7Z0JBQ2hCLElBQUksRUFBRSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2dCQUNSLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDdEIsUUFBUSxFQUFFLEVBQUU7YUFDYixDQUFBO1NBQ0Y7UUFFRCxVQUFVO1FBQ1YsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFFOUMsYUFBYTtRQUNiLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQTtZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUN4QixNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUE7YUFDN0I7WUFDRCxHQUFHLEdBQUc7Z0JBQ0osTUFBTTtnQkFDTixPQUFPLEVBQUUsSUFBSSxHQUFHLEVBQUU7YUFDbkIsQ0FBQTtTQUNGO1FBRUQsdUJBQXVCO1FBQ3ZCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxlQUFlLEVBQUU7WUFDbEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO1NBQzdDO1FBRUQsa0JBQWtCO1FBQ2xCLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQzFCLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO1NBQ3hDO2FBQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ3JCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNwRTtRQUVELGFBQWE7UUFDYixLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQTtRQUNoQixLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFBO1FBQzFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFBO0tBQzNCO0lBQ0QsT0FBTyxNQUFNLENBQUE7QUFDZixDQUFDO0FBbkRELGtEQW1EQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxJQUFZO0lBQ3hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyw0REFBNEQsRUFBRSxFQUFFLENBQUMsQ0FBQTtBQUN2RixDQUFDO0FBRkQsc0NBRUM7QUFFRCxTQUFnQixhQUFhLENBQUMsSUFBWTtJQUN4QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzdCLE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNqQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDckIsR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtLQUM3QixDQUFBO0FBQ0gsQ0FBQztBQVBELHNDQU9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJlcG9ydFRhYmxlLCBJRXJyb3JHcm91cCB9IGZyb20gJy4vY29tbW9uJ1xuXG4vLyBHZW5lcmFsXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYWJsZUVycm9yR3JvdXBzKHRhYmxlOiBJUmVwb3J0VGFibGUpIHtcbiAgY29uc3QgZ3JvdXBzOiB7IFtjb2RlOiBzdHJpbmddOiBJRXJyb3JHcm91cCB9ID0ge31cbiAgZm9yIChjb25zdCBlcnJvciBvZiB0YWJsZS5lcnJvcnMpIHtcbiAgICAvLyBHZXQgZ3JvdXBcbiAgICBsZXQgZ3JvdXAgPSBncm91cHNbZXJyb3IuY29kZV1cblxuICAgIC8vIENyZWF0ZSBncm91cFxuICAgIGlmICghZ3JvdXApIHtcbiAgICAgIGdyb3VwID0ge1xuICAgICAgICBjb2RlOiBlcnJvci5jb2RlLFxuICAgICAgICByb3dzOiB7fSxcbiAgICAgICAgY291bnQ6IDAsXG4gICAgICAgIGhlYWRlcnM6IHRhYmxlLmhlYWRlcnMsXG4gICAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXQgcm93XG4gICAgbGV0IHJvdyA9IGdyb3VwLnJvd3NbZXJyb3JbJ3Jvdy1udW1iZXInXSB8fCAwXVxuXG4gICAgLy8gQ3JlYXRlIHJvd1xuICAgIGlmICghcm93KSB7XG4gICAgICBsZXQgdmFsdWVzID0gZXJyb3Iucm93IHx8IFtdXG4gICAgICBpZiAoIWVycm9yWydyb3ctbnVtYmVyJ10pIHtcbiAgICAgICAgdmFsdWVzID0gdGFibGUuaGVhZGVycyB8fCBbXVxuICAgICAgfVxuICAgICAgcm93ID0ge1xuICAgICAgICB2YWx1ZXMsXG4gICAgICAgIGJhZGNvbHM6IG5ldyBTZXQoKSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgbWlzc2luZyB2YWx1ZVxuICAgIGlmIChlcnJvci5jb2RlID09PSAnbWlzc2luZy12YWx1ZScpIHtcbiAgICAgIHJvdy52YWx1ZXNbZXJyb3JbJ2NvbHVtbi1udW1iZXInXSEgLSAxXSA9ICcnXG4gICAgfVxuXG4gICAgLy8gQWRkIHJvdyBiYWRjb2xzXG4gICAgaWYgKGVycm9yWydjb2x1bW4tbnVtYmVyJ10pIHtcbiAgICAgIHJvdy5iYWRjb2xzLmFkZChlcnJvclsnY29sdW1uLW51bWJlciddKVxuICAgIH0gZWxzZSBpZiAocm93LnZhbHVlcykge1xuICAgICAgcm93LmJhZGNvbHMgPSBuZXcgU2V0KHJvdy52YWx1ZXMubWFwKChfdmFsdWUsIGluZGV4KSA9PiBpbmRleCArIDEpKVxuICAgIH1cblxuICAgIC8vIFNhdmUgZ3JvdXBcbiAgICBncm91cC5jb3VudCArPSAxXG4gICAgZ3JvdXAubWVzc2FnZXMucHVzaChlcnJvci5tZXNzYWdlKVxuICAgIGdyb3VwLnJvd3NbZXJyb3JbJ3Jvdy1udW1iZXInXSB8fCAwXSA9IHJvd1xuICAgIGdyb3Vwc1tlcnJvci5jb2RlXSA9IGdyb3VwXG4gIH1cbiAgcmV0dXJuIGdyb3Vwc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQmFzZVVybCh0ZXh0OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSgvaHR0cHM6XFwvXFwvcmF3XFwuZ2l0aHVidXNlcmNvbnRlbnRcXC5jb21cXC9cXFMqP1xcL1xcUyo/XFwvXFxTKj9cXC8vZywgJycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdEZpbGVQYXRoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBwYXJ0cyA9IHBhdGguc3BsaXQoJy8nKVxuICByZXR1cm4ge1xuICAgIG5hbWU6IHBhcnRzLnBvcCgpLFxuICAgIGJhc2U6IHBhcnRzLmpvaW4oJy8nKSxcbiAgICBzZXA6IHBhcnRzLmxlbmd0aCA/ICcvJyA6ICcnLFxuICB9XG59XG4iXX0=