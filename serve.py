from http.server import SimpleHTTPRequestHandler
import socketserver
import webbrowser

PORT = 8772

class Handler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".js": "application/javascript",
        ".css": "text/css",
        ".svg": "image/svg+xml",
    }

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    url = f"http://localhost:{PORT}"
    print(url)
    try:
        webbrowser.open(url)
    except Exception:
        pass
    httpd.serve_forever()
